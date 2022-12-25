import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./Home.css";
import "./HomeStyle.css";

function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["MERN STACK DEVELOPER"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="leftDiv">
        <div className="contentDiv">
          <h2>Hi, I'm Manoj Kumar & a Passionate </h2>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <h1>
            From <span className="i">I</span> <span className="n">N</span>{" "}
            <span className="d">D</span>
          </h1>
        </div>
      </div>
      <div className="rightDiv">
        <div className="imgDiv">
          <div className="socialMedia">
            <a
              target={`_blank`}
              href="https://www.linkedin.com/in/manoj-kumar-798508218/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a target={`_blank`} href="https://github.com/BCAPATHSHALA">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              target={`_blank`}
              href="https://www.instagram.com/manojkumargfg/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              target={`_blank`}
              href="https://www.youtube.com/channel/UCFYxbSXZ5gzhl4xBZX788ow"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
          <img src="asset/man.png" className="image" alt="man" />
        </div>
      </div>
    </div>
  );
}

export default Home;
