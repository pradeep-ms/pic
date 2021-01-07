import React from "react";
import { connect } from "react-redux";

import { searchImage } from "../../store/actions";

function SearchImage(props) {
  const { searchImageList } = props;

  return (
    <div className="search-box-wrapper">
      <input
        className="search-box"
        placeholder="Search images..."
        onChange={(event) => searchImageList(event.currentTarget.value)}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchImageList: (search) => dispatch(searchImage(search)),
  };
};

export default connect(null, mapDispatchToProps)(SearchImage);
