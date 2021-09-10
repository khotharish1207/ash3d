import React from "react";
import IconInsta from "./assets/icons/Instagram.png";
import logo from "./assets/icons/logo_bg.png";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">ASH 3D</a>
          </div>
          <div className="social">
            <a
              href="https://www.instagram.com/ash_3d_printing/"
              title="Ash3D Instagram page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IconInsta} className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
            <img src={logo} />
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>
              Website coming soon. Please check back to know more. Ping us if
              you're curious.
            </p>
          </div>
          <div className="buttonSection">
            <a
              href="https://wa.me/919766626859"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cta">What's App Us</div>
            </a>
            <a
              href="https://www.instagram.com/ash_3d_printing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cta">Know Us More</div>
            </a>
          </div>
        </div>
     </div>
    );
  };
}

export default App;
