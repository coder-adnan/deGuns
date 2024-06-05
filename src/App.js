import Footer from "./components/Footer";
import Header from "./components/Header";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import Forum from "./pages/Forum";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sell from "./pages/Sell";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      <Router>
      <Routes>  
            <Route path='/home-page' element={  <Home/>} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/buy' element={<Buy/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/sell" element={<Sell />} />
            <Route path = '/login' element= {<Login/>} />
            <Route path = '/register' element= {<Register/>} />
            <Route path="*" element={<Navigate to="/home-page" />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
