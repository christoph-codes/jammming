import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

export default function SearchResults(props) {
    let results = props.results;
    let onAdd = props.onAdd;
    let onRemove = props.onRemove;
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList isRemoval={false} onRemove={onRemove} onAdd={onAdd} results={results} />
        </div>
    )
}