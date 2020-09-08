import React, { useState } from "react";
import { Input, Button } from "antd";

import Article from "./Article";
import AllComments from "./AllComments";
const TextArea = Input.TextArea;

const CommentBox = ({ id, content, allComments, createComment }) => {
  const [comment, setComment] = useState(null);

  return (
    <div>
      <Article content={content} />
      <AllComments
        parent={id}
        allComments={allComments}
        createComment={createComment}
      />
      <TextArea
        rows={4}
        placeholder="your comment"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <Button type="primary" onClick={() => createComment(id, comment)}>
        Comment
      </Button>
    </div>
  );
};

export default CommentBox;
