import './App.css'
import Header from './Header';
import CustomCursor from './CustomCursor';
import AboutSquadZero from './About';

function App() {
  return (
    <div className='orbitron cursor-none selection:bg-yellow-500'>
      <CustomCursor className="max-md:hidden"/>
      <Header/>
      <AboutSquadZero/>
    </div>
  )
}

export default App;
