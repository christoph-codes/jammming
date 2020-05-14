import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default function App(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: 'Get Low',
      artist: 'Lil Jon',
      album: 'Twerk a Little',
      id: 1
    },
    {
      name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Madman Across the Water',
      id: 2
    },
    {
      name: 'Magic Happens',
      artist: 'Trey Songz',
      album: 'Love Story',
      id: 3
    }
  ]);

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks([...playlistTracks, {
        name: track.name,
        artist: track.artist,
        album: track.album,
      }])
    }
  }

  const removeTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks([...playlistTracks, {
        name: track.name,
        artist: track.artist,
        album: track.album,
      }])
    }
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    let trackURIs = [];
  }

  const search = (term) => {
    console.log(term);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar search={search} />
        <div className="App-playlist">
          <SearchResults onAdd={addTrack} results={searchResults} />
          <Playlist onSave={savePlaylist} onNameChange={updatePlaylistName} name={playlistName} onRemove={removeTrack} tracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
}

