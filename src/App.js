import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SingleIntrument from './pages/SingleIntrument';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='background_10131c'>
        <Navigation/>
        <Routes>
        <Route exact path="/" element={ <Home/> }></Route>
        <Route exact path="/guitare" element={ <SingleIntrument/> }></Route>
        </Routes>
        </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
