import React from "react";
import classes from "./Footer.module.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  const allLinks = [
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

  const links = allLinks.filter((l) => l.to !== pathname);

  return (
    <>
      <ul className={classes.Footer}>
        {links.map((link) => (
          <li key={link.to} className={classes.FooterItems}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Footer;
