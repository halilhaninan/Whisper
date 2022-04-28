import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import CommentList from "./CommentList";
import Navbar from "./Navbar";
import CardExampleContentBlock from "./CardExampleContentBlock";

const MainPage = () => {
  const [write, setWrite] = useState([""]);
  const [postId, setPostId] = useState();
  const [bartu, setBartu] = useState(0);
  const [view, setView] = useState("show-comment");

  console.log(write.id);

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts`)
      .then((response) => {
        setWrite(response.data);
      })
      .catch((error) => {
        console.log("ERROR !!!", error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="wrapped">
        {/* header div */}

        <Navbar
          setView={setView}
          write={write}
          setBartu={setBartu}
          setPostId={setPostId}
        />

        {/* genereal div */}

        <div
          style={{
            paddingTop: "20px",
            paddingLeft: "80px",
            paddingRight: "80px",
          }}
          className="ui grid">
          {/* left div */}

          <div
            style={{
              paddingTop: "20px",
              padding: "left",
              width: "20%",
              height: 1100,
              overflowX: "scroll",
            }}
            className="comment div">
            <button
              onClick={() => {
                setView("create-content");
              }}
              style={{ width: "250px" }}
              className="ui toggle button active">
              Create Post
            </button>

            {write.map((subwrite, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="ui vertical fluid tabular menu">
                    <a
                      style={{
                        fontFamily: "Arial",
                        fontWeight: `item ${index === bartu ? "bold" : ""}`,
                      }}
                      onClick={() => {
                        setBartu(index);
                        setPostId(subwrite.id);
                        setView("show-comment");
                      }}
                      className={`item ${index === bartu ? "active" : ""}`}>
                      {subwrite?.title}
                    </a>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <div className="twelve wide stretched column">
            {/* right div */}
            <div className="ui segment">
              {/* <CardExampleContentBlock /> */}
              <CommentList
                setView={setView}
                setBartu={setBartu}
                view={view}
                setView={setView}
                bartu={bartu}
                write={write}
                postId={postId}
                setWrite={setWrite}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
