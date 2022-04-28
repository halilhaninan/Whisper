import React, { useState } from "react";
import "./Modal.css";
import { auth } from "../firebase";

function Modal({ setOpenModal, modalOpen, logout }) {
  return (
    <div
      style={{
        top: "100px",
        left: "22%",
        zIndex: 99999,
        display: modalOpen ? "table" : "none  ",
      }}
      className="ui modal">
      <i className="close icon"></i>
      <div className="header">Are you sure?</div>
      <div className="image content">
        <div className="description">
          <div className="ui header">
            Dear {auth.currentUser ? auth.currentUser.displayName : "user"}
          </div>
          <p>You are logging out of Whisper, do you confirm this?</p>
        </div>
      </div>
      <div className="actions">
        <div
          onClick={() => setOpenModal(false)}
          className="ui green deny button">
          Nope
        </div>
        <div
          onClick={() => logout()}
          className="ui negative right labeled icon button">
          Yep, see you :)
          <i className="checkmark icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Modal;
