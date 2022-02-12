// Importing thing we need
import Link from "next/link";
import { useEffect, useState } from "react";
// Main function
const Nav = () => {
  // Variables
  const mobileWidth = 768;
  const [showMenuButton, setShowMenuButton] = useState(null);
  const [showMenu, setShowMenu] = useState(null);
  // Functions
  const toggleMenu = () => setShowMenu(!showMenu);
  // Life cycle
  useEffect(() => {
    if (window.innerWidth < mobileWidth) setShowMenuButton(true);
    window.addEventListener("resize", function () {
      if (window.innerWidth < mobileWidth) setShowMenuButton(true);
      else setShowMenuButton(false);
    });
  }, []);
  // Returning jsx
  return (
    // Nav
    <nav className="nav">
      {/* Nav ul  */}
      <ul className="nav-ul">
        {/* Logo  */}
        <li className="logo">ajjlal ahmed</li>
        {/* Desktop menu  */}
        {!showMenuButton && (
          <>
            {" "}
            (
            <li className="nav-item">
              <Link href="/">home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about">about</Link>
            </li>
            <li className="nav-item">
              <a href={`/resume.pdf`} download>
                <i className="fa fa-download" aria-hidden="true"></i>resume
              </a>
            </li>
            )
          </>
        )}
        {/* Mobile menu  */}
        {showMenuButton && (
          <li className="menu">
            <div onClick={toggleMenu} className="bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {showMenu && (
              <ul className="mob-nav">
                <li className="nav-item">
                  <Link onClick={toggleMenu} href="/">
                    home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={toggleMenu} href="about">
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <a href={`/resume.pdf`} download>
                    <i className="fa fa-download" aria-hidden="true"></i>resume
                  </a>
                </li>
              </ul>
            )}
          </li>
        )}
      </ul>
    </nav>
    // Nav
  );
};
// Exporting Main Function
export default Nav;
