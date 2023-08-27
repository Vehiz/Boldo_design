import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Footer from "../../components/Footer/Footer";
import Numbers from "../../components/Numbers/Numbers"
import Team from "../../components/Team/Team"
import Values from "../../components/Values/Values"
// import Logo from "../assets/LogoShape.svg";

const About = () => {
  return (
    <div>
      <div className="container-1">
        <Navbar />
        <div className="main-txt-container">
          <p className="main-text-1">About</p>
          <div className="main-text-2">
            We love to make great things, things that matter.
          </div>
          <div className="main-text-3">
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="container-2-img">
          <div className="imgA">
            <img src={Img1} alt=""></img>
            <img src={Img2} alt=""></img>
          </div>
          <div className="imgB">
            <img src={Img3} alt=""></img>
          </div>
          <div className="imgC">
            <img src={Img4} alt=""></img>
            <img src={Img5} alt=""></img>
          </div>
        </div>
        <div className="container-2-text">
          <div className="container-2-text-1">
            Our Story
          </div>
          <div className="container-2-text-2">
            Handshake infographic mass market crowdfunding iteration.
          </div>
          <div className="container-2-text-3">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </div>
        </div>
      </div>
      <Numbers/>
      <Team/>
      <Values/>
      <Footer />
    </div>
  );
};

export default About;
