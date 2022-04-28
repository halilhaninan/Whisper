import React, { useState } from "react";
import EditModal from "./EditModal";

const EditComment = ({ postId, commentId, setCommentView }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ paddingLeft: "560px" }}>
      <i
        onClick={() => {
          setModalOpen(true);
        }}
        class="edit outline icon"></i>
      {EditModal && (
        <EditModal
          setCommentView={setCommentView}
          setModalOpen={setModalOpen}
          modalOpen={EditModal}
          postId={postId}
          commentId={commentId}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          modalOpen={modalOpen}
        />
      )}
    </div>
  );
};

export default EditComment;
