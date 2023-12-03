import { createRoot } from 'react-dom/client'
import styles from './style'
import App from './App'
import Navbar, { SidebarItem } from './components/Navbar'
import { CassetteTape, ListMusic } from 'lucide-react'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', top: 0, right: 40, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a>
      <Navbar className={` h-screen `} style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        <SidebarItem icon={<ListMusic size={20}/>} text="Music" alert />
        <SidebarItem icon={<CassetteTape size={20} />} text="Player" alert />                                    
      </Navbar>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
        <p> Made by <a href="/home" className="underline underline-offset-2"> Ndwigar</a> & <a href="./home" className=" underline underline-offset-2"> Contributors</a> inspired by our love for music.</p>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <Overlay />
    <App className="h-screen" /> 
  </>
)
