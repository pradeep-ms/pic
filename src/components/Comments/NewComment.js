import React, { useState } from "react";
import { connect } from "react-redux";

import { addComment } from "../../store/actions";

function NewComment(props) {
  const { imageId, postComment } = props;
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handlePostComment = () => {
    postComment(imageId, value);
    setValue("");
  };

  return (
    <div className="input-group">
      <div className="input-group-area">
        <input
          type="text"
          placeholder="Type your comment here..."
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="input-group-icon" onClick={handlePostComment}>
        POST
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (id, comment) => dispatch(addComment(id, comment)),
  };
};

export default connect(null, mapDispatchToProps)(NewComment);
