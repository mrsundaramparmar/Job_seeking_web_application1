import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Mr.Sundaram.G.</div>
      <div>
        <Link to={"https://www.facebook.com/sundram.singh.298822/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@mangyani"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/sundaram-parmar-676b241b5/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/mr_sundram_g/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;