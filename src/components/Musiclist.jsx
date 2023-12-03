import { React, useState } from "react";
import { songsdata } from '../constants/audios';
import styles, { layout } from '../style';



const MusicList = ({ img }) =>  {
  const [active, setActive] = useState("Home");

  return (
    <section className={`overflow-hidden `} >
      <div className={`px-5 py-2 grid grid-col gap-1 h-200 scroll-smooth overflow-y-scroll`}>
        <ul className="sm:flex flex-1 flex-col" >
          {songsdata.map((song, index) => (
            <li
              key={song.id}
              className={`font-normal cursor-pointer text-[13px] ${
                active === song.title ? "text-black" : "text-black"
              } ${index !== songsdata.length - 1 ? "mb-6" : "mb-0"}`}
              onClick={() => setActive(song.title)}
            >
              <div className={`flex flex-row gap-2 items-center`}>
                <div className={`w-[30px] h-[30px] rounded-full`}>
                  <img src={song.img} alt="star" className="w-[100%] h-[100%] object-fill" />
                </div>
                <a href={`${song.id}`}>{song.title}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
};
  
export default MusicList;