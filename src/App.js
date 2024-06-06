import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import Medicine from './Component/Category/Medicine';
import Health from './Component/Category/Health';
import Lab from './Component/Category/Lab';
import Surgical from './Component/Category/Surgical';
import Ayurvedic from './Component/Category/Ayurvedic';
import Equipment from './Component/Category/Equipment';
import ProductDetails from './Component/ProdutctDetails/ProductDetails';
import Cart from './Pages/Cart';
import Error from './Pages/Error';





function App() {
  return (
    <div className="w-full h-screen">
    
    <div>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Medicine' element={<Medicine/>}/>
          <Route path='/Health' element={<Health/>}/>
          <Route path='/Lab' element={<Lab/>}/>
          <Route path='/Surgical' element={<Surgical/>}/>
          <Route path='/Ayurvedic' element={<Ayurvedic/>}/>
          <Route path='/Equipment' element={<Equipment/>}/>

          <Route path='/Product-details' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>

      </BrowserRouter>
    </div>
    <Footer/>


    </div>
  );
}

export default App;
