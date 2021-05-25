import React from "react";

const Footer = ({ address }) => (
  <div className="container">
    <ul>
      {address.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Footer;
