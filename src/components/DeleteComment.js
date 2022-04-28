import axios from "axios";
import React, { useState } from "react";
import DeleteCommentModal from "./DeleteCommentModule";

const DeleteComment = ({ postId, commentId, setCommentView }) => {
  const [modal, setModal] = useState(false);
  console.log(modal);

  const handleDelete = () => {
    axios
      .delete(
        `https://react-yazi-yorum.herokuapp.com/posts/${postId}/comments/${commentId}`
      )
      .then((response) => {
        setCommentView((prev) => prev.filter((item) => item.id !== commentId));
      })
      .catch(() => {
        alert("error");
      });
  };

  return (
    <div
      className="trash alternate outline"
      style={{ paddingLeft: "560px", marginTop: "20px" }}>
      <i
        onClick={() => {
          setModal(true);
        }}
        className="trash alternate outline icon"></i>

      {modal && (
        <DeleteCommentModal
          handleDelete={handleDelete}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default DeleteComment;
