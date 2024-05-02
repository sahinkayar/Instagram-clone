import React from "react";
import {
  IoMdHome,
  IoIosSearch,
  IoMdCompass,
  IoIosVideocam,
  IoMdHeartEmpty,
  IoMdAddCircleOutline,
  IoIosMenu,
} from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import "../Styles/SideNav.css";
function SideNav() {
  return (
    <div className="Container">
      <div className="Header">
        <h1>Instagram</h1>{" "}
      </div>
      <div className="Tabs">
        <div>
          <span className="Icons">
            {" "}
            <IoMdHome />{" "}
          </span>
          <span className="Title"> Home</span>
        </div>
        <div>
          <span className="Icons">
            <IoIosSearch />
          </span>
          <span className="Title"> Search</span>
        </div>
        <div>
          {" "}
          <span className="Icons">
            <IoMdCompass />
          </span>
          <span className="Title"> Explore</span>
        </div>
        <div>
          {" "}
          <span className="Icons">
            <IoIosVideocam />
          </span>
          <span className="Title"> Reels</span>
        </div>
        <div>
          {" "}
          <span className="Icons">
            <LuMessageCircle />
          </span>
          <span className="Title"> Messages</span>
        </div>
        <div>
          {" "}
          <span className="Icons">
            <IoMdHeartEmpty />
          </span>
          <span className="Title"> Notifications</span>
        </div>
        <div>
          {" "}
          <span className="Icons">
            <IoMdAddCircleOutline />
          </span>
          <span className="Title"> Create</span>
        </div>
        <div>
          {" "}
          <span className="Icons">
            <span> </span>
            <CgProfile />
          </span>
          <span className="Title"> profile</span>
        </div>
      </div>
      <div className="More-Tab">
        <span className="Icons">
          {" "}
          <IoIosMenu />
        </span>
        <span className="Title-more"> More</span>
      </div>
    </div>
  );
}

export default SideNav;
