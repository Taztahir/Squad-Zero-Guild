import './App.css'
import Header from './Header';
import CustomCursor from './CustomCursor';

function App() {
  return (
    <div className='orbitron cursor-none selection:bg-yellow-500'>
      <Header/>
      <CustomCursor/>
    </div>
  )
}

export default App;
