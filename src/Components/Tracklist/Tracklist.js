import React from "react";
import "./TrackList.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
  return (
    <div>
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
}

export default Tracklist;