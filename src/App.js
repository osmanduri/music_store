import React from 'react'
import { BrowserRouter as Router, Route, Routes, Redirect, Navigate } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SingleIntrument from './pages/SingleIntrument';
import Drums from './pages/Drums';
import GuitarFilter from './pages/GuitarFilterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='background_10131c'>
        <Navigation/>
        <Routes>
        <Route exact path="/" element={ <Home/> }></Route>
        <Route exact path="/guitare" element={ <GuitarFilter/> }></Route>
        <Route exact path="/guitare/:id" element={ <SingleIntrument/> }></Route>
        <Route exact path="/drums" element={ <Drums/> }></Route>
        
        <Route
        path='*'
        element={<Navigate to="/" replace/>}
        />
        </Routes>
        </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
