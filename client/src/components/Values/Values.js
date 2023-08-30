import React from "react";
import "./Values.css";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";

const Values = () => {
  return (
    <div className="values-container">
      <div className="val-section_a">
        <div className="val-text">
          <p className="text1">Our values</p>
          <p className="text2">Things we believe</p>
        </div>
        <div>
          <p className="text3">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </p>
        </div>
      </div>
      <div className="val-col-container">
        <div className="val-col">
        
            <img src={Image1} alt="Image1" />
         
          <div className="val-col-txt-sect">
            <div className="val-col-text1">We are commited.</div>
            <p className="val-col-text2">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
        <div className="val-col">
    
            <img src={Image2} alt="Image2" />
   
          <div className="val-col-txt-sect">
            <div className="val-col-text1">We are responsible.</div>
            <p className="val-col-text2">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
        <div className="val-col">
            <img src={Image3} alt="Image3" />
          <div className="val-col-txt-sect">
            <div className="val-col-text1">We aim for progress.</div>
            <p className="val-col-text2">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
