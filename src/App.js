import React, { useState } from 'react';

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
  
  return (
    <StyledApp> 
      <GlobalFonts />
      <Global />
      <Router >
        <Header cart={cart} />
        <Switch>
          <Route exact path="/Best-4-Buy/" component={Home} />
          <Route exact path="/Best-4-Buy/shop"
            render={()=> <Shop setCart={setCart} cart={cart}/>}
          />
          <Route exact path="/Best-4-Buy/shop/:id"
            render={()=> <Shop setCart={setCart} cart={cart}/>}
          />
          <Route exact path="/Best-4-Buy/search" component={Search} />
          <Route exact path="/Best-4-Buy/search/:id"
            render={()=> <Shop setCart={setCart} cart={cart} isSearch />}
          />
          <Route exact path="/Best-4-Buy/cart"
            render={()=> <Cart cart={cart} setCart={setCart} />}
          />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
