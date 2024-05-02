import React from "react";
import "../Styles/Timeline.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import image from "../assets/pexels-lukas-rychvalsky-671549 (1).jpg";
function Timeline() {
  return (
    <div>
      <div className="Timeline-header">
        {" "}
        <span>For You</span> <span className="Followings">Following</span>{" "}
      </div>
      <hr />
      <div className="Avatars">
        <span>
          <Avatar sx={{ width: 46, height: 46, backgroundColor: "red" }}>
            N
          </Avatar>{" "}
        </span>
        <span>
          {" "}
          <Avatar sx={{ width: 46, height: 46, backgroundColor: "blue" }}>
            A
          </Avatar>
        </span>
        <span>
          {" "}
          <Avatar sx={{ width: 46, height: 46, backgroundColor: "green" }}>
            S
          </Avatar>
        </span>
        <span>
          {" "}
          <Avatar sx={{ width: 46, height: 46, backgroundColor: "brown" }}>
            X
          </Avatar>{" "}
        </span>{" "}
      </div>
      <div className="Post-Container">
        <div className="Post-Title">
          <div className="Post-left">
            <Avatar>N</Avatar>{" "}
            <span className="title">
              NamNamStyle- <span>2h</span>
            </span>{" "}
          </div>

          <span className="more">
            {" "}
            <MoreHorizIcon />
          </span>
        </div>{" "}
      </div>{" "}
      <div className="img-cover">
        <img src={image} alt="sadsa" />
      </div>
      <div className="bottom">
        <div className="btm-left">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <ShareIcon />{" "}
        </div>
        <div>
          {" "}
          <BookmarkBorderIcon />{" "}
        </div>
      </div>
      <div className="Desc-box">
        <div className="Likes">
          {" "}
          <span className="bold"> Ronaldo </span> and{" "}
          <span className="bold"> 132 others </span> liked this
        </div>
        <div className="desc-div">
          <p className="Desc-title">
            <span className="Desc-titlex"> NamNamStyle </span>
            <span className="desc">
              Life is beatiful, When you're in the right path
            </span>
          </p>
          <p className="See-comments">See the comments</p>
        </div>{" "}
      </div>
      <div className="Post-Container">
        <div className="Post-Title">
          <div className="Post-left">
            <Avatar>N</Avatar>{" "}
            <span className="title">
              NamNamStyle- <span>2h</span>
            </span>{" "}
          </div>

          <span className="more">
            {" "}
            <MoreHorizIcon />
          </span>
        </div>{" "}
      </div>{" "}
      <div className="img-cover">
        <img src={image} alt="sadsa" />
      </div>
      <div className="bottom">
        <div className="btm-left">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <ShareIcon />
        </div>
        <div>
          {" "}
          <BookmarkBorderIcon />{" "}
        </div>
      </div>
      <div className="Desc-box">
        <div className="Likes">
          {" "}
          <span className="bold"> Ronaldo </span> and{" "}
          <span className="bold"> 132 others </span> liked this
        </div>
        <div className="desc-div">
          <p className="Desc-title">
            <span className="Desc-titlex"> NamNamStyle </span>
            <span className="desc">
              Life is beatiful, When you're in the right path
            </span>
          </p>
          <p className="See-comments">See the comments</p>
        </div>{" "}
      </div>
      <div className="Post-Container">
        <div className="Post-Title">
          <div className="Post-left">
            <Avatar>N</Avatar>{" "}
            <span className="title">
              NamNamStyle- <span>2h</span>
            </span>{" "}
          </div>

          <span className="more">
            {" "}
            <MoreHorizIcon />
          </span>
        </div>{" "}
      </div>{" "}
      <div className="img-cover">
        <img src={image} alt="sadsa" />
      </div>
      <div className="bottom">
        <div className="btm-left">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <ShareIcon />
        </div>
        <div>
          {" "}
          <BookmarkBorderIcon />{" "}
        </div>{" "}
      </div>
      <div className="Desc-box">
        <div className="Likes">
          {" "}
          <span className="bold"> Ronaldo </span> and{" "}
          <span className="bold"> 132 others </span> liked this
        </div>
        <div className="desc-div">
          <p className="Desc-title">
            <span className="Desc-titlex"> NamNamStyle </span>
            <span className="desc">
              Life is beatiful, When you're in the right path
            </span>
          </p>
          <p className="See-comments">See the comments</p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Timeline;
