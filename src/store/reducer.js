import * as actionTypes from "./actions";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST: {
      return { ...state, isLoading: true };
    }

    case actionTypes.FETCH_SUCCESS: {
      return { ...state, isLoading: false, images: action.payload };
    }

    case actionTypes.SEARCH_IMAGE: {
      return { ...state, searchText: action.payload };
    }

    case actionTypes.LIKE_IMAGE: {
      const { images } = state;
      const image = images.findIndex((item) => item.id === action.payload);
      images[image].likes += 1;
      images[image].liked = true;

      return { ...state, images: [...images] };
    }

    case actionTypes.UNLIKE_IMAGE: {
      const { images } = state;
      const image = images.findIndex((item) => item.id === action.payload);
      images[image].likes -= 1;
      images[image].liked = false;

      return { ...state, images: [...images] };
    }

    case actionTypes.ADD_COMMENT: {
      const { images } = state;
      const image = images.findIndex((item) => item.id === action.payload.id);
      images[image].comments.push(action.payload.comment);

      return { ...state, images: [...images] };
    }

    case actionTypes.SORT_MOST_LIKED: {
      return { ...state, sortType: actionTypes.SORT_MOST_LIKED };
    }

    case actionTypes.SORT_MOST_COMMENTED: {
      return { ...state, sortType: actionTypes.SORT_MOST_COMMENTED };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
