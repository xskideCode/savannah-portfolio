import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/xskideCode" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/leon-ndungu-06679428a" },
  // { icon: <FaYoutube />, path: "" },
  // { icon: <FaXTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
