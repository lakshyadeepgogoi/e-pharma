import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';




function App() {
  return (
    <div className="w-full h-screen">
    
    <div>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Medicine' element={''}/>
          <Route path='/Health' element={''}/>
          <Route path='/Lab' element={''}/>
          <Route path='/Surgical' element={''}/>
          <Route path='/Ayurvedic' element={''}/>
          <Route path='/Equipment' element={''}/>
        </Routes>

      </BrowserRouter>
    </div>
    <Footer/>


    </div>
  );
}

export default App;
