import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
    const handleTermChange = (e) => {
        props.search(e.target.value)
    }
    return (
        <div className="SearchBar">
            <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
    )
}