import React from "react";
import { Avatar } from "@mui/material";
import "../Styles/suggestions.css";
function Suggestions() {
  return (
    <div className="container">
      <div className="suggestions">
        <div className="sug-for">Suggested For you</div>
        <button className="See-btn">See all</button>
      </div>
      <div className="sug-col">
        <div className="Sug-box">
          <div className="sug-left">
            {" "}
            <span className="Avatar-span">
              <Avatar>S</Avatar>
              <div className="spans">
                {" "}
                <span className="First-span">namnamstyle</span>{" "}
                <span className="sec-span">Follows You</span>{" "}
              </div>
            </span>
          </div>{" "}
          <div className="sug-right">
            <button>Follow</button>
          </div>
        </div>

        <div className="sug-col">
          <div className="Sug-box">
            <div className="sug-left">
              <span className="Avatar-span">
                <Avatar sx={{ backgroundColor: "yellow" }}>M</Avatar>
                <div className="spans">
                  {" "}
                  <span className="First-span">namnamstyle1</span>{" "}
                  <span className="sec-span">Follows you</span>{" "}
                </div>
              </span>
            </div>{" "}
            <div className="sug-right">
              <button>Follow</button>
            </div>
          </div>{" "}
        </div>

        <div className="sug-col">
          <div className="Sug-box">
            <div className="sug-left">
              <span className="Avatar-span">
                <Avatar sx={{ backgroundColor: "blue" }}>Y</Avatar>
                <div className="spans">
                  {" "}
                  <span className="First-span">namnamstyle2</span>{" "}
                  <span className="sec-span">Follows you</span>{" "}
                </div>
              </span>
            </div>{" "}
            <div className="sug-right">
              <button>Follow</button>
            </div>
          </div>{" "}
        </div>

        <div className="sug-col">
          <div className="Sug-box">
            <div className="sug-left">
              <span className="Avatar-span">
                <Avatar sx={{ backgroundColor: "red" }}>x</Avatar>
                <div className="spans">
                  {" "}
                  <span className="First-span">namnamstyle3</span>{" "}
                  <span className="sec-span">Follows you</span>{" "}
                </div>
              </span>
            </div>{" "}
            <div className="sug-right">
              <button>Follow</button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
