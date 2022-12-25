import React from "react";
import "./testimonials.css";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "asset/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "asset/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "asset/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d, index) => {
          return (
            <div className={d.featured ? "card featured" : "card"} key={index}>
              <div className="top">
                <img src="asset/right-arrow.png" className="left" alt="" />
                <img className="user" src={d.img} alt="" />
                <img className="right" src={d.icon} alt="" />
              </div>
              <div className="center">{d.desc}</div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;