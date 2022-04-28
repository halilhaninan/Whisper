import axios from "axios";
import React, { useEffect, useState } from "react";
import { Comment, Header } from "semantic-ui-react";
import AddComment from "./AddComment";
import EditComment from "./EditComment";
import CreateContent from "./CreateContent";
import DeleteComment from "./DeleteComment";
import UserProfile from "./UserProfile";
import { format } from "date-fns";

const CommentList = ({
  write,
  bartu,
  postId,
  setWrite,
  setView,
  view,
  setBartu,
}) => {
  const [commentView, setCommentView] = useState([]);
  console.log("setcomemntview", commentView);

  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  useEffect(() => {
    if (postId == undefined) return;
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${postId}/comments`)

      .then((response) => {
        setCommentView(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  return (
    <React.Fragment>
      {view == "create-content" && (
        <CreateContent
          setView={setView}
          setBartu={setBartu}
          write={write}
          setWrite={setWrite}
          bartu={bartu}
          setView={setView}
        />
      )}
      {view == "my-profile" && <UserProfile setView={setView} />}
      {view == "show-comment" && (
        <Comment.Group>
          <Header as="h3" dividing>
            {write[bartu].title}
          </Header>
          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author style={{ fontSize: "15px" }} as="a">
                {write[bartu].id}
              </Comment.Author>
              <Comment.Metadata>
                <div style={{ fontWeight: "bold" }}>
                  {write[bartu].created_at}
                </div>
              </Comment.Metadata>
              <Comment.Text>{write[bartu].content}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply (not working)</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <br></br>
            <br></br>
            {commentView.map((comment, index) => {
              return (
                <Comment key={index}>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">
                      {comment.display_name}
                    </Comment.Author>

                    <Comment.Text>{comment.body}</Comment.Text>
                    <Comment.Actions>
                      <div
                        key={index}
                        onClick={increase}
                        className="ui mini  red ok inverted button">
                        <i className="heart  outline icon"></i>
                        {counter}
                      </div>
                      <Comment.Action>
                        <EditComment
                          setCommentView={setCommentView}
                          postId={postId}
                          commentId={comment.id}
                        />
                        <DeleteComment
                          setCommentView={setCommentView}
                          postId={postId}
                          commentId={comment.id}
                        />
                      </Comment.Action>

                      <Comment.Metadata
                        style={{ paddingLeft: "420px", paddingTop: "20px" }}>
                        <div style={{ fontWeight: "bold" }}>
                          {String(format(new Date(comment.created_at), "PPpp"))}
                        </div>
                      </Comment.Metadata>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              );
            })}
          </Comment>

          <AddComment postId={postId} setCommentView={setCommentView} />
        </Comment.Group>
      )}
    </React.Fragment>
  );
};

export default CommentList;
