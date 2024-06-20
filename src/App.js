import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Component/navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import Medicine from "./Component/Category/Medicine";
import Health from "./Component/Category/Health";
import Lab from "./Component/Category/Lab";
import Surgical from "./Component/Category/Surgical";
import Ayurvedic from "./Component/Category/Ayurvedic";
import Equipment from "./Component/Category/Equipment";
import ProductDetails from "./Component/ProdutctDetails/ProductDetails";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import PrivateRoute from "./Component/Auth/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Prescription from "./Pages/Prescription";
import BottomNavigation from "./Component/BottomNavigation";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation().state;
  
  return (
    <div className="app-container">
      {/* <BrowserRouter> */}
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Medicine" element={<Medicine />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Lab" element={<Lab />} />
          <Route path="/Surgical" element={<Surgical />} />
          <Route path="/Ayurvedic" element={<Ayurvedic data = {location}/>} />
          <Route path="/Equipment" element={<Equipment />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/user/:activepage"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/Product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} />} />
          <Route path="*" element={<Error />} />
          <Route path="/prescription" element={<Prescription/>} />
        </Routes>
        <Footer />
        <BottomNavigation/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
