import React from 'react';
import Nav  from './components/Nav';
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import AppController from './components/AppController'
import './App.css';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/shop" render={() => (<AppController currentPage='index' />)} />
      <Footer />
    </div>
  );
}

export default App;
