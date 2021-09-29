import {
  ALBUMS_ACTION_ERROR,
  ALBUMS_ACTION_START,
  ALBUMS_LOAD_SUCCESS,
  UPDATE_FILTER,
} from "../actions/actionTypes";

const initialState = {
  albums: [],
  filter: "All",
  loadingAction: false,
  error: null,
};
export const albumsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALBUMS_ACTION_START:
      return (state = { ...state, loadingAction: true });
    case ALBUMS_LOAD_SUCCESS:
      return (state = {
        ...state,
        loadingAction: false,
        error: null,
        albums: payload,
      });
    case UPDATE_FILTER:
      return (state = { ...state, filter: payload });
    case ALBUMS_ACTION_ERROR:
      return (state = { ...state, loadingAction: false, error: payload });
    default:
      return state;
  }
};
