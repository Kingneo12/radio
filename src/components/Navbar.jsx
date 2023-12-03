import { MoreVertical, Library, CassetteTapeIcon, BoomBoxIcon, SpeakerIcon, BoomBox, Speaker, LucideHeading3, Volume2, ListMusic } from "lucide-react"
import { useContext, createContext, useState } from "react"
import { menu, logo } from '../assets';
import { socialMedia } from "../constants";
import Player from '../components/Player'
import MusicList from "./Musiclist";

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className={`${expanded ? "w-60" : "w-20"} h-screen`}>
      <nav className="h-full flex flex-col bg-white opacity-30 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className="flex flex-col justify-between items-center">
            <img
              src={menu}
              className={`overflow-hidden transition-all ${expanded ? "w-10" : "w-0"}`}
              alt=""
            />
            <h3 className={`overflow-hidden text-sm transition-all text-black ${expanded ? "w-100%" : "w-0"}`}>Gamut Gaita</h3>
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-black-100 hover:bg-black-100"
          >
            {expanded ? <Speaker /> : <Library />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            {children}
            <div>
              {expanded ? <MusicList /> : <ListMusic />}
            </div>
            <div className={`${expanded ? "w-50" : "w-15"} last:absolute bottom-4`}>
              <div className="p-4 bg-black-100 hover:bg-black-100 rounded-lg">
                {expanded ? <Player /> : <Volume2 />}
              </div>
              <div className=" flex p-3">
                <img
                  src={logo}
                  alt=""
                  className="w-10 h-10 rounded-md"
                />
                <div
                  className={`
                    flex justify-between items-center
                    overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
                `}
                >
                  
                  <div className="leading-4">
                    <div className={`grid-flow-row auto-rows-max`}>  
                      <div className="flex flex-row md:mt-0 mt-6 items-start">
                        {socialMedia.map((social, index) => (
                          <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[15px] h-[15px] object-contain cursor-pointer ${
                              index !== socialMedia.length - 1 ? "mr-3" : "mr-0"
                            }`}
                            onClick={() => window.open(social.link)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <MoreVertical color="black" size={13} />
                </div>
              </div>
            </div>
          </ul>  
        </SidebarContext.Provider>        
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${ expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${ expanded ? "" : "top-2"}`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}