import React, { useState } from 'react';
// import uuid from 'uuid/v1';

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

  //console.log(songs);
  const addSong = () => {
    // this function completely change/Replace the value instead of adding to current value
    // so we are first spreading the songs and after that adding a new song
    // uuid function generates a unique id we install it from npm
    setSongs([...songs, { title: 'new song', id: 4 }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
}

export default SongList;