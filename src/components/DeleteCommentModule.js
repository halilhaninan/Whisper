import React from "react";

const DeleteCommentModal = ({ modal, handleDelete, setModal }) => {
  const deleted = () => {
    handleDelete();
    setModal(false);
  };

  return (
    <div
      style={{
        zIndex: 99999,
        display: modal ? "table" : "none  ",
        backgroundColor: "#2B2B2B",
      }}
      class="ui basic modal">
      <div class="ui icon header">
        <i class="trash icon"></i>
        Delete your message
      </div>
      <div class="content">
        <h4>Are you sure delete you want your comment?</h4>
      </div>
      <div class="actions">
        <div class="ui green ok inverted button">
          <i
            onClick={() => {
              setModal(false);
            }}
            class="checkmark icon"></i>
          No
        </div>
        <div onClick={deleted} class="ui red basic cancel inverted button">
          <i class="remove icon"></i>
          yes
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentModal;
