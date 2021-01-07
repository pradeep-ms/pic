import React from "react";

function CommentList(props) {
  const { comments } = props;
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <li key={comment} className="comment-item">
          {comment}
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
