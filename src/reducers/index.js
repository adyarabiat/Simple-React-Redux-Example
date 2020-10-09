import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "baby baby ", duration: "04:05" },
    { title: "tell me something", duration: "03:05" },
    { title: "Hello it is me ", duration: "02:30" },
    { title: "be the one ", duration: "04:30" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  // We use if statement here for example but it actually does not need this
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

// we export our combineReducers
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
