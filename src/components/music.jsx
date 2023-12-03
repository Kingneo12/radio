import React from 'react';
import './player.css';
import styles from '../style';
import {BsPlay, BsPause, BsSkipStart, BsSkipEnd} from 'react-icons/bs';

const music = ({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs})=> {

  const PlayPause = ()=>
  {
    setisplaying(!isplaying);

  }


 /* const checkWidth = (e)=>
  {
    let width = audioElem.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  */

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title === currentSong.title, currentSong.img);
    if (index === 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }


  const skiptoNext = ()=>
  {
    const index = songs.findIndex(x=>x.title === currentSong.title);

    if (index === songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }

  return (
    <div className='player_container'>
      <div className={`flex flex-row gap-2 py-1`}>
        <div className={`w-[50px] h-[50px] overflow-hidden ${styles.flexCenter} bg-dimBlue`}>
          <img src={currentSong.img} alt="star" className=" object-fill" />
        </div>
        <div className="title">
          <p>{currentSong.title}</p>
        </div>
      </div>
      <div className="navigation">
        <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
      </div>
      <div className={`flex md:flex-row py-4`}>
        <BsSkipStart className='btn_action' onClick={skipBack}/>
        {isplaying ? <BsPause className='btn_action pp' onClick={PlayPause}/> : <BsPlay className='btn_action pp' onClick={PlayPause}/>}
        <BsSkipEnd className='btn_action' onClick={skiptoNext}/>        
      </div>
    </div>
  
  )
}

export default music