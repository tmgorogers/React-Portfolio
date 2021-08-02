import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from "./Contact.module.css";

const handleURL = (url) => {
  return (event) => window.open(url, "blank");
};

const Contact = () => {
  return (
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactIcons}>
        <FaFilePdf
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL(
            "https://docs.google.com/document/d/1PIDprIShzHqRi7WjtqG9G6r_zkOyHBkycJ_C0yc-f38/edit?usp=sharing"
          )}
        />

        <FaGithub
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://github.com/tmgorogers")}
        />

        <FaLinkedin
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://linkedin.com/in/tierra-r-46a978101")}
        />
      </div>
    </div>
  );
};

export default Contact;
