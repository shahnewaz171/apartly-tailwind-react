import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderMain from './components/HeaderMain/HeaderMain';
import Dropdown from './components/Navbar/Dropdown';
import HouseRent from './components/HouseRent/HouseRent';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('resize dddd');
      }
    }
    window.addEventListener('resize', hideMenu); 

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <div>
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/">
            <HeaderMain />
            <HouseRent />
            <Services />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
