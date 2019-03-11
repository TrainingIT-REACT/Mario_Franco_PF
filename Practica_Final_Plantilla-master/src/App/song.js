import React from 'react';

const Song = ({ songs }) => {
  return <ul>
    { songs.map((song) => (

      <li key={song.id}>
        <strong>{song.name}</strong><span> {song.seconds}</span>
        <audio className="audioSize" controls>
          <source src={song.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
          </audio>
      </li>




      

    ))}
  </ul>
}

export default Song;




