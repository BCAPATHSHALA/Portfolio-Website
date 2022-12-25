import React, { useState } from "react";
import "./Certificate.css";
import "./CertificateStyle.css";
import { CERTIFICATES } from "../../data";

function Certificate() {
  const [countId, setCountId] = useState(0);

  function handleSubmit(value) {
    if (value === 3) {
      value = 0;
      setCountId(value);
    }
    if (value < 0) {
      value = 2;
      setCountId(value);
    } else {
      setCountId(value);
    }
  }

  return (
    <div className="certificate" id="certificate">
      <div className="bigDiv">
        <a className="btnID" href="#" onClick={() => handleSubmit(countId - 1)}>
          <i class="fa-solid fa-chevron-left"></i>
        </a>
        {CERTIFICATES.map((items) => {
          if (items.id === countId) {
            return (
              <div className="divContent">
                <div className="leftDiv">
                  <div className="circleImage">
                    <img src={items.cpimg} alt="" />
                  </div>
                  <div className="btnProject">
                    <p>{items.title}</p>
                    <a target={`_blank`} href={items.crimg}>
                      visite
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <a className="btnID" href="#" onClick={() => handleSubmit(countId + 1)}>
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Certificate;
