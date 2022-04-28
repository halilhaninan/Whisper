import React, { useState } from "react";
import axios from "axios";
import { Form, TextArea } from "semantic-ui-react";

const EditModal = ({
  setModalOpen,
  postId,
  commentId,
  modalOpen,
  setCommentView,
}) => {
  const [editComment, setEditComment] = useState({
    body: "",
  });

  const handleEdit = () => {
    axios
      .put(
        `https://react-yazi-yorum.herokuapp.com/posts/${postId}/comments/${commentId}`,
        editComment
      )
      .then((response) => {
        setCommentView((prev) => {
          const arr = [...prev];
          arr.forEach((item) => {
            if (item.id == commentId) item.body = editComment.body;
          });
          return arr;
        });

        setEditComment({
          body: "",
        });
      });
  };

  const sendComment = () => {
    handleEdit();
    setModalOpen(false);
  };

  return (
    <div
      style={{
        zIndex: 99999,
        display: modalOpen ? "table" : "none  ",
      }}
      className="ui modal">
      <i className="close icon"></i>
      <div className="header">Edit Comment</div>
      <div className="image content">
        <div className="description">
          <div className="ui header">New Comment</div>
          <Form>
            <TextArea
              name="body"
              value={editComment.body}
              onChange={(event) => {
                setEditComment({ body: event.target.value });
              }}
              placeholder="Tell us more"
              style={{ minHeight: 100 }}
            />
          </Form>
        </div>
      </div>
      <div className="actions">
        <div
          onClick={() => setModalOpen(false)}
          className="ui info deny button">
          Nope
        </div>
        <div onClick={sendComment} className="ui  green labeled icon button">
          Send comment
          <i className="checkmark icon"></i>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
