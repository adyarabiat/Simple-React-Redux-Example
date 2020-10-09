// Action Creator
export const selectSong = (song) => {
  // returned Action
  return {
    // Actions:
    // Always should have type but not always payload

    type: "SONG_SELECTED",
    payload: song,
  };
};
