import React from "react";
import "./works.css";

function Works() {
  const data = [
    {
      id: "1",
      icon: "./asset/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      src: "https://media.istockphoto.com/id/1304484797/photo/person-holds-a-smartphone-with-mobile-banking-icons-projection.jpg?b=1&s=170667a&w=0&k=20&c=Ltu8ENR_G2n8QBF90rEjKhIvM1j3emewjZUuSVTLIlI=",
    },
  ];

  return (
    <div className="works" id="works">
      <div className="slider">
        {data.map((d, index) => {
          return (
            <div className="container" key={index}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img src={d.src} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
