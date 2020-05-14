import React from 'react';
import Track from '../Track/Track';

export default function TrackList(props) {
    const results = props.results;
    const onAdd = props.onAdd;
    const onRemove = props.onRemove;
    const isRemoval = props.isRemoval;
    // const renderResults = results.map(track => {
    //         return <Track isRemoval={isRemoval} onAdd={onAdd} onRemove={onRemove} key={track.id} track={track} />
    //     });
    return (
        <div className="TrackList">
            {/* {renderResults} */}
        </div>
    );
}