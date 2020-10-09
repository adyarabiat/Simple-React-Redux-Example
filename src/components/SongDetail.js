import React from "react";
import { connect } from "react-redux";

const SongDetails = (props) => {
  if (!props.song) {
    return <h3>Select a Song</h3>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <br />
      <p>{`Title: ${props.song.title}`}</p>
      <p>{`Duration: ${props.song.duration}`}</p>
    </div>
  );
};

// Here we are calling the data inside the Redux store
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
