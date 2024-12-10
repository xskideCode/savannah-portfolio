import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the JSON body
    const body = await req.json();
    const { firstname, lastname, email, phone, service, message } = body;

    // Validate required fields
    if (!firstname || !lastname || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields." }),
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Your Portfolio" <${process.env.EMAIL_USER}>`, // Sender's address
      to: "ndunguaspen@gmail.com", // Receiver's address
      subject: "New Contact Form Submission", // Subject line
      text: `
        New message from your portfolio contact form:

        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <h1>New message from your portfolio contact form</h1>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email. Try again later." }),
      {
        status: 500,
      }
    );
  }
}
