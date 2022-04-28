import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import Modal from "./Modal";

const Logout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);

  const logout = () => {
    signOut(auth).then(
      function () {
        <a href="/login"></a>;
        // Sign-out successful.
      },
      function (error) {
        console.log(error);
        // An error happened.
      }
    );

    console.log("user is logget out");
  };

  return (
    <div style={{ marginRight: "200px" }}>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
        style={{ color: "white" }}
        class="negative mini ui button">
        Log out
      </button>
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          modalOpen={modalOpen}
          logout={logout}
        />
      )}
    </div>
  );
};

export default Logout;
