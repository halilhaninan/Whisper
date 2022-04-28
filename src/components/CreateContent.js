import axios from "axios";
import React, { useState } from "react";
import { auth } from "../firebase";
const Createcontent = ({ setWrite, setView, write, setBartu }) => {
  const [content, setContent] = useState({
    title: "",
    content: "",
  });

  const onFormSubmit = () => {
    axios
      .post(`https://react-yazi-yorum.herokuapp.com/posts`, content)
      .then((response) => {
        setWrite((prev) => [response.data, ...prev]);
        setContent({
          title: "",
          content: "",
        });
        setView("show-comment");
        setBartu(0);
      });
  };

  const onInputChange = (event) => {
    setContent((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <React.Fragment>
      <div>
        <div className="ui form">
          <div className="field">
            <label>Title</label>

            <input
              value={content.title}
              type="text"
              name="title"
              onChange={onInputChange}
            />
          </div>
          <div className="field">
            <label> Content</label>
            <textarea
              value={content.content}
              rows="3"
              name="content"
              onChange={onInputChange}></textarea>
          </div>

          <button onClick={onFormSubmit} className="ui button primary">
            send
          </button>
          <button
            onClick={() => {
              setView("show-comment");
            }}
            className="ui button ">
            cancel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Createcontent;
