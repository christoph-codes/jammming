import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export default function PlayList(props) {
    const tracks = props.tracks;
    const onRemove = props.onRemove;
    const onSave = props.onSave;

    const handleNameChange = (e) => {
        return e.target.value
    }

    return (
        <div className="Playlist">
            <input onChange={handleNameChange} defaultValue={'New Playlist'} />
            <TrackList onRemove={onRemove} tracks={tracks} />
            <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}