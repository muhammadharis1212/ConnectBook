import React from "react";
import "./rightBar.scss";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg"
                alt=""
              />
              <span>Haris</span>
            </div>
            <div className="btn">
              <PersonAddAltOutlinedIcon />
              <DeleteOutlinedIcon />
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg"
                alt=""
              />
              <span>Haris</span>
            </div>
            <div className="btn">
              <PersonAddAltOutlinedIcon />
              <DeleteOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg"
                alt=""
              />
              <p>
                <span>Haris</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg"
                alt=""
              />
              <p>
                <span>Haris</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg"
                alt=""
              />
              <div className="online" />
              <span>Haris</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
