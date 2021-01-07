import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { ImageCard } from "../ImageCard/index";

import {
  SORT_MOST_LIKED,
  SORT_MOST_COMMENTED,
  fetchImages,
} from "../../store/actions";

function ImageList(props) {
  const { isLoading, images, fetchImages, sortType, searchText } = props;

  const [imageList, setImageList] = useState(images);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let data = [...images];

    if (searchText) {
      data = data.filter((item) =>
        item.category.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    switch (sortType) {
      case SORT_MOST_LIKED:
        data = data.sort((a, b) => b.likes - a.likes);
        break;

      case SORT_MOST_COMMENTED:
        data = data.sort((a, b) => b.comments.length - a.comments.length);
        break;

      default:
        break;
    }

    setImageList([...data]);
  }, [sortType, images, searchText]);

  return (
    <div className="grid-container">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        imageList.map((item) => (
          <div key={item.id} className="grid-item">
            <ImageCard data={{ ...item }} />
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { isLoading, images, sortType, searchText } = state;
  return { isLoading, images, sortType, searchText };
};

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
