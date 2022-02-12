// Main function
const Footer = () => {
  // Returning jsx
  return (
    // Footer
    <div className="footer">
      {/* Icons  */}
      <ul className="icons">
        <li className="icon">
          <a
            target="_blank"
            href="https://github.com/AjjlalAhmed"
            rel="noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="icon">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ajjlalahmed/"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li className="icon">
          <a
            target="_blank"
            href="https://www.fiverr.com/ajjlal_ahmed"
            rel="noreferrer"
          >
            fr
          </a>
        </li>
      </ul>
      {/* Text  */}
      <p className="text">made by ajjlal ahmed</p>
    </div>
    // Footer
  );
};
// Exporting Main Function
export default Footer;
