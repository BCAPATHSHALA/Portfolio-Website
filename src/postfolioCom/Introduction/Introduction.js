import "./Introduction.css";
import "./ResponsiveIntro.css";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";

function Introduction() {
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
      <div className="left">
        <div className="divContent">
          <h2>Hi There, I'm</h2>
          <hr />
          <h2>Manoj Kumar</h2>
          <h4>
            Freelance <span ref={textRef}></span>
          </h4>
        </div>
      </div>
      <div className="right">
        <img src="asset/man.png" className="heroImage" alt="man" />
      </div>
    </div>
  );
}

export default Introduction;
