import React from 'react';
import './App.css';
import Films from './Components/Films';
import NavFilms from './Components/NavFilms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes } from 'react-router-dom'
import CardContent from './Components/CardContent';


function App() {
 
  return (
    <div >
     <NavFilms/>
     <Routes>
             <Route path='/Acceuil'/>
             <Route path='/Films' element={<Films />}/>
             <Route path='/Séries'/>
             <Route path='/Films/:content' element={<CardContent/>}/>
     </Routes>
    </div>
  );
}

export default App;
