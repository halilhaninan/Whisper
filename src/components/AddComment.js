import React, { useState } from "react";
import axios from "axios";
import { auth } from "../firebase";

const AddComment = ({ postId, setCommentView }) => {
  const [comment, setComment] = useState({
    display_name: auth.currentUser.displayName,
    body: "",
  });
  const [error, setError] = useState();

  const onInputChange = (event) => {
    setComment((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = () => {
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${postId}/comments`,
        comment
      )
      .then((response) => {
        setCommentView((prev) => [response.data, ...prev]);

        setComment({
          display_name: "",
          body: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setError("");
      });
  };

  return (
    <React.Fragment>
      {error && (
        <div className="ui error message">
          <div className="header">error</div>
          <p>{error}</p>
        </div>
      )}
      <div className="ui form">
        <div className="field">
          <label> Comment</label>
          <textarea
            value={comment.body}
            rows="3"
            name="body"
            onChange={onInputChange}></textarea>
        </div>

        <button className="positive  ui button" onClick={onFormSubmit}>
          send
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddComment;
