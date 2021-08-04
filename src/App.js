import React, { useState, useEffect } from 'react';

import { StyledApp } from './components/styles/App.style';
import { Global } from './components/styles/Globas.style';
import { GlobalFonts } from './assets/fonts/GlobalFonts.style';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Search from './components/Search';
import Cart from './components/Cart';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  console.log(0)
  return (
    <StyledApp> 
      <GlobalFonts />
      <Global />
      <Router >
        <Header cart={cart} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop"
            render={()=> <Shop setCart={setCart} cart={cart}/>}
          />
          <Route path="/shop/:id"
            render={()=> <Shop setCart={setCart} cart={cart}/>}
          />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cart"
            render={()=> <Cart cart={cart} setCart={setCart} />}
          />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
