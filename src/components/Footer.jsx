import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Privacy Policy",
      to: "/privacy",
    },
    {
      name: "Terms & Conditions",
      to: "/terms-and-conditions",
    },
  ];

  return (
    <>
      <ul className={classes.Footer}>
        {links.map((link) => (
          <li key={link.to} className={classes.FooterItems}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Footer;
