import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home}from '../src/Components/Home/Home'
import {LoginPage} from '../src/Components/LoginPage/LoginPage'
import {Contact} from '../src/Components/Contact/Contact'
import {Register} from  '../src/Components/Register/Register'
import { ExposureSites } from './Components/Exposure-sites/Exposure_sites';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/exposure-sites" element={<ExposureSites/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
