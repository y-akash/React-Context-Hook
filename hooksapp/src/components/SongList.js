import React, { useState, useEffect } from 'react';
import {v4} from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);

  // we can also use more than 1 times useState hook in one component
  const [age, setAge] = useState(20);
  
  // useEffect is a function 
  // it takes a callback function as a parameter
  // and that callback function gonna run everytime 
  // when component render or rerender or state changes in component and it is similar to lifecycle method like didComponentMounted
  // this useEffect hook will run for any change in component
  useEffect(()=>{
    console.log('useEffect hook run', songs);
  });
  
  // if we want to run the useEffect for particular change of data
  // bcoz in above useEffect it run for any change like if we change age or songs it will run for both
  // so we want to pass one more parameter as an array in useEffect method
  // and inside the array we want to provide the value, 
  // and that value will be responsible for runnig that useEffect hook
  // so here we are passing songs in that array 
  // so when songs changes than useEffect hook will run 
  // and if age changes than this useEffect hook will not run
  useEffect(()=>{
    console.log('useEffect hook run for songs', songs);
  },[songs]);

  // we can also use more than 1 times useEffect hook in one component
  // this will run when age will change
  useEffect(()=>{
    console.log('useEffect hook run for age', age);
  },[age]);
  

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
      <button onClick={()=>setAge(age+1)}>Add 1 to age: {age}</button>
    </div>
  );
}

export default SongList;