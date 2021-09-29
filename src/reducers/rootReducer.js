import { albumsReducer } from "./albumsReducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  albums: albumsReducer,
});

export default rootReducer;
