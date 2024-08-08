import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, service, message } = req.body;

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS // Your Gmail password or app password
      }
    });

    try {
      // Send email
      await transporter.sendMail({
        from: '"Your Portfolio" <your-email@gmail.com>', // sender address
        to: "ndunguaspen@gmail.com", // list of receivers
        subject: "New Contact Form Submission", // Subject line
        text: `
          New message from your portfolio contact form:
          
          Name: ${firstname} ${lastname}
          Email: ${email}
          Phone: ${phone}
          Service: ${service}
          Message: ${message}
        `, // plain text body
        html: `
          <h1>New message from your portfolio contact form</h1>
          <p><strong>Name:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        ` // html body
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}