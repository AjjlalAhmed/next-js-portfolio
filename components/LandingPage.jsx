/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

const LandingPage = () => {
  // Variables
  const logos = [
    "/html-5.svg",
    "/css3.svg",
    "/javascript.svg",
    "/vue-js.svg",
    "/nodejs.svg",
    "/mysql-logo.svg",
    "/mongodb.svg",
    "/git.svg",
    "/npm.svg",
  ];

  return (
    <div className="landing-page">
      <div className="top">
        <h1 className="landing-page__title">
          Hi, I’m Ajjlal Ahmed | <span>Full Stack Developer</span>
        </h1>
        <p className="landing-page__desc">
          I'm a self-taught passionate Full Stack Developer from Pakistan PK. I
          love being in this line of work because I'm passionate about
          technology and innovation.
        </p>
        <div className="btn">
          <a className="action-btn" href="#work">
            view work
          </a>
        </div>
        <div className="social-icons">
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
        </div>
      </div>
      <div className="layer"></div>
    </div>
  );
};

export default LandingPage;
