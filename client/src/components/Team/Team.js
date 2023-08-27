import React from "react";
import "./Team.css";
import img1 from "../../assets/ImageTeam1.png";
import img2 from "../../assets/ImageTeam2.png";
import img3 from "../../assets/ImageTeam3.png";

const Team = () => {
  return (
    <div>
      <div className="team-container">
        <div className="team-heading">
          <div className="text-sect">
            <p className="text-a">Our Team</p>
            <div className="text-b">The leadership team</div>
          </div>
          <p className="text-c">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </p>
        </div>
        <div className="profile-container">
          <div>
            <img src={img1} alt="img1" />
            <div>
              <p className="name-text">Michael Scott</p>
              <p className="role-text">General Manager</p>
            </div>
          </div>
          <div>
            <img src={img2} alt="img2" />
            <div>
              <p className="name-text">Dwight Schrute</p>
              <p className="role-text">General Manager</p>
            </div>
          </div>
          <div>
            <img src={img3} alt="img2" />
            <div>
              <p className="name-text">Pam Beetsley</p>
              <p className="role-text">General Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
