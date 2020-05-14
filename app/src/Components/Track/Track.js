import React from "react";
import "./Track.css";

export default function Track(props) {
  const isRemoval = props.isRemoval;
  const track = props.track;
  const addTrack = props.onAdd;
  const removeTrack = props.onRemove;

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button onClick={isRemoval ? addTrack : removeTrack} className="Track-action">{isRemoval ? "-" : "+"}</button>
    </div>
  );
}
