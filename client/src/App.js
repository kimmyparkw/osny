import React from 'react';
import Nav  from './components/Nav';
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import './App.css';
import { Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Footer />
    </div>
  );
}

export default App;
