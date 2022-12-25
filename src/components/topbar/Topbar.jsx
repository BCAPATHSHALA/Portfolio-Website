import React from "react";
import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

function Topbar({ menuOpen, setMenuOpen }) {
  // const [menuOpen, setMenuOpen] = useState(false);
  function toggle() {
    setMenuOpen(!menuOpen); 
  }

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Mk<span style={{color: 'crimson'}}>.</span><span>.</span>
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 9129045342</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>manojkumargfg.1@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={toggle}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
