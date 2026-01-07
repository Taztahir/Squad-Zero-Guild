import './App.css'
import Header from './Header';
import CustomCursor from './CustomCursor';
import AboutSquadZero from './About';
import Stats from './Stats';
import MemberCard from "./MemberCard";
import Gallery from './Gallery';
import JoinSquad from './JoinGroup';
function App() {
  return (
    <div className='orbitron cursor-none selection:bg-yellow-500'>
      <CustomCursor className="max-md:hidden"/>
      <Header/>
      <AboutSquadZero/>
      <Stats/>
      <MemberCard/>
      <Gallery/>
      <JoinSquad/>
    </div>
  )
}

export default App;
