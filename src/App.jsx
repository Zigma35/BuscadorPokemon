import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './View/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Detalle from './View/Detalle';
import Pokemones from './View/Pokemones';

function App() {
  return (
    <div className='App'> 
     <BrowserRouter>
       <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemones" element={<Pokemones />} />
        <Route path="/Pokemones/:name" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;