import axios from "axios";

import data from "./data";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const SORT_MOST_LIKED = "SORT_MOST_LIKED";
export const SORT_MOST_COMMENTED = "SORT_MOST_COMMENTED";

export const ADD_COMMENT = "ADD_COMMENT";

export const SEARCH_IMAGE = "SEARCH_IMAGE";

export const LIKE_IMAGE = "LIKE_IMAGE";
export const UNLIKE_IMAGE = "UNLIKE_IMAGE";

export const searchImage = (searchText) => ({
  type: SEARCH_IMAGE,
  payload: searchText,
});

export const sortImage = (type) => ({
  type,
});

export const sortMostLiked = () => ({
  type: SORT_MOST_LIKED,
});

export const sortMostCommented = () => ({
  type: SORT_MOST_COMMENTED,
});

export const addComment = (imageId, comment) => ({
  type: ADD_COMMENT,
  payload: { id: imageId, comment },
});

export const likeImage = (imageId) => ({
  type: LIKE_IMAGE,
  payload: imageId,
});

export const unlikeImage = (imageId) => ({
  type: UNLIKE_IMAGE,
  payload: imageId,
});

export const fetchImageRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchImageSuccess = (images) => ({
  type: FETCH_SUCCESS,
  payload: images,
});

export function fetchImages() {
  return (dispatch) => {
    dispatch(fetchImageRequest());
    axios
      .get(
        "https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json"
      )
      .then((res) => {
        let images;

        if (res.status === 200) {
          images = res.data.pics;
        } else {
          images = data.pics;
        }

        dispatch(fetchImageSuccess(images));
      })
      .catch((err) => {
        console.error(err);
        dispatch(fetchImageSuccess(data));
      });
  };
}
