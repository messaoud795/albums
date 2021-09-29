import {
  ALBUMS_ACTION_ERROR,
  ALBUMS_ACTION_START,
  ALBUMS_LOAD_SUCCESS,
  UPDATE_FILTER,
} from "./actionTypes";
import data from "../resources/albums.json";

//load all albums from the json file
export const loadAlbums = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ALBUMS_ACTION_START });
      dispatch({ type: ALBUMS_LOAD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ALBUMS_ACTION_ERROR, payload: error });
    }
  };
};
//update the filter
export const updateFilter = (dispatch, data) => {
  return dispatch({ type: UPDATE_FILTER, payload: data });
};
