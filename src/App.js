import {Routes,Route,useLocation} from 'react-router-dom';
import  './app.css';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles'
import Home from './Containers/Home';
import About from './Containers/About';
import Portfolio from './Containers/Portfolio';
import Resume from './Containers/Resume';
import Socials from './Containers/Socials';
import Contact from './Containers/Contact';
import Navbar from './Components/Navbar/index';
import particles from './utils/Particles'
function App() {
  const location=useLocation(); 
  const renderAtHome=location.pathname==="/";
  const handleinit= async(main)=>{
      await loadFull(main);
  }
  return (
    
    <div className='App' >
    {
      renderAtHome && <Particles id='particles' options={particles} init={handleinit}/>
    }
    <Navbar></Navbar>
    <div className='App__main-page-content'>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route  path='/Easy' element={<About/>}/>
      <Route  path='/portfolio' element={<Portfolio/>}/>
      <Route  path='/Hard' element={<Resume/>}/>
      <Route  path='/Medium' element={<Socials/>}/>
      <Route  path='/Hard+' element={<Contact/>}/>
    </Routes>
    </div>
    
    </div>
  );
}

export default App;
