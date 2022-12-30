import React from "react";
import Controls from "./Controls";
import SeekBar from "./SeekBar";

const Player = ({ currentSong }) => {
  return (
   
      <section className="flex flex-col items-center border">
         
      {/* <audio src={currentSong} controls repeat="loop" autoPlay /> */}
      {/* <SeekBar /> */}

      {/* <audio controls>
        <source src="/public/music.mp3" type="audio/mp3" autoPlay />
        Your browser does not support the audio element.
      </audio> */}
      {/* <audio controls>
        <source
          src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/2b/bd/d0/2bbdd03b-2079-452b-9e54-3000ad9db011/mzaf_10814947559187448634.plus.aac.ep.m4a"
          type="audio/aac"
        />
        Your browser does not support the audio element.
      </audio> */}
        <Controls />
        <audio autoPlay>
          <source src={currentSong} type="audio/aac" />
          Your browser does not support the audio element.
        </audio>
        <SeekBar />
        {/* <audio controls src="/public/music.mp3" /> */}
      </section>
    
  );
};

export default Player;
