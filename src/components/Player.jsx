import React from 'react'
import { songsdata } from '../constants/audios';
import { useRef, useState, useEffect } from 'react';
import Music from './music'

const Player = () => {
    const [songs, setSongs] = useState(songsdata);
    const [isplaying, setisplaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsdata[1]);
  
    const audioElem = useRef();
  
    useEffect(() => {
      if (isplaying) {
        audioElem.current.play();
      }
      else {
        audioElem.current.pause();
      }
    }, [isplaying, currentSong])
  
    const onPlaying = () => {
      const duration = audioElem.current.duration;
      const ct = audioElem.current.currentTime;
  
      setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
  
    }
    
    return (
      <div className={`flex-1 flex w-full flex items-start bottom-0`}>
        <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
        <Music songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      </div>
    );
}
export default Player


