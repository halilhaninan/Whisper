import React from "react";
import Logout from "./Logout";
import SearchPost from "./SearchPost";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ setView, write, setBartu, setPostId }) => {
  return (
    <React.Fragment>
      <nav
        style={{ backgroundColor: "#2D2D2D", justifyContent: "space-evenly" }}
        className="navbar">
        <h2 style={{ color: "#f6d365" }} className="dontMiss_heading__DujH1">
          Whisper
        </h2>

        <SearchPost
          write={write}
          setBartu={setBartu}
          setPostId={setPostId}
          setView={setView}
        />

        <div style={{ paddingRight: "0px" }}>
          <img
            type="button"
            onClick={() => {
              setView("my-profile");
            }}
            className="ui avatar image"
            src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          />
          <a
            type="button"
            onClick={() => {
              setView("my-profile");
            }}
            style={{ color: "white" }}>
            {auth.currentUser ? auth.currentUser.displayName : "user"}
          </a>
        </div>
        <Logout Logout={Logout} />
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
