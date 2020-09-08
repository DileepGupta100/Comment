import React from "react";
import CommentBox from "./CommentBox";

/*
Comment = {
    id,
    parentId,
    content,
    children:[]
}
*/

const AllComments = ({ parent, allComments = [], createComment }) => {
  const comments = allComments[parent]?.children;
  return (
    <div>
      {Object.keys(comments).map((key) => {
        return (
          <CommentBox
            content={comments[key].content}
            allComments={allComments}
            id={parent}
            createComment={createComment}
          />
        );
      })}
    </div>
  );
};

export default AllComments;
