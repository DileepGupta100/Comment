import React, { useState } from "react";

import CommentBox from "./CommentBox";
import useComments from "./useComments";

const App = ({ articleId = "mainArticle" }) => {
  const content = (
    <p>
      A wiki (/ˈwɪki/ (About this soundlisten) WIK-ee) is a hypertext
      publication collaboratively edited and managed by its own audience
      directly using a web browser. A typical wiki contains multiple pages for
      the subjects or scope of the project and may be either open to the public
      or limited to use within an organization for maintaining its internal
      knowledge base. Wikis are enabled by wiki software, otherwise known as
      wiki engines. A wiki engine, being a form of a content management system,
      differs from other web-based systems such as blog software, in that the
      content is created without any defined owner or leader, and wikis have
      little inherent structure, allowing structure to emerge according to the
      needs of the users.[1] Wiki engines usually allow content to be written
      using a simplified markup language and sometimes edited with the help of a
      rich-text editor.[2] There are dozens of different wiki engines in use,
      both standalone and part of other software, such as bug tracking systems.
      Some wiki engines are open source, whereas others are proprietary. Some
      permit control over different functions (levels of access); for example,
      editing rights may permit changing, adding, or removing material. Others
      may permit access without enforcing access control. Other rules may be
      imposed to organize content.
    </p>
  );
  const { allComments, createComment } = useComments(articleId, content);

  return (
    <div
      style={{
        height: "auto",
        margin: "auto",
        width: 800,
        border: 3,
        padding: 10
      }}
    >
      <h1> Blog Post </h1>
      <CommentBox
        id={articleId}
        content={content}
        allComments={allComments}
        createComment={createComment}
      />
    </div>
  );
};

export default App;
