import React, { useState } from 'react';
import {v4} from 'uuid';
import NewSongForm from './NewSongForm';

// Now, we can use state in functional component
// with the help of useState() hook
const SongList = () => {
  // useState() is a function which take only one parameter 
  // which will be initial value for this piece of state
  // the useState() function return 1 one array
  // and inside that array we get two value
  // first gonna be the state which we provide as parameter in useState() function
  // and second value will be a function which is use to edit that state
  // so below we are destructuring to get those two value
  // we can give any name to those
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: v4() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}

export default SongList;