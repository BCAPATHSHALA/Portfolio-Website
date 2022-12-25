import React from "react";
import "./Services.css";
import "./ServicesStyle.css";

function Services() {
  return (
    <div className="services" id="services">
      <div className="bigServices">
        <div className="uiuxDiv">
          <h2>UI/UX</h2>
          <div className="uiux">
            <div className="iconDiv">
              <i class="fa-solid fa-pen-nib"></i>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, maxime!
            </p>
          </div>
        </div>

        <div className="uiuxDiv">
          <h2>WEB DEVELOPMENT</h2>
          <div className="uiux">
            <div className="iconDiv">
              <i class="fa-solid fa-code"></i>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, maxime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
