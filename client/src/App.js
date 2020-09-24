import React from 'react';
import Nav  from './components/Nav';
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import ShopBy from './components/ShopBy'
import AppController from './components/AppController'

import './App.css';
import { Route } from 'react-router-dom'

class App extends React.Component{ 
  render(props) {
    return (
      <div className="App">
        <div className="container">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={ShopBy} />
          <Route exact path="/shop/all" render={() => (<AppController currentPage='index' />)} />
          <Route exact path="/shop/collection" render={() => (<AppController currentPage='collections' />)} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
