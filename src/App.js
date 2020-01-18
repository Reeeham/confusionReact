import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes';

function App() {

  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant ConFusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={DISHES}/>
      </div>
  );
}

export default App;
