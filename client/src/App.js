import React from 'react';
import Nav  from './components/Nav';
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import ShopBy from './components/ShopBy'
import AppController from './components/AppController'
import Login from './components/Login'
import Register from './components/Register'
import Auth from './modules/Auth.js'

import './App.css';
import { Redirect, Route } from 'react-router-dom'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      auth: false,
      user: null
    }
  }

  componentDidMount() {
    fetch('/login', { credentials: 'include' })
      .then(res => res.json())
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={ShopBy} />
          <Route exact path="/shop/all" render={() => (<AppController currentPage='index' />)} />
          <Route exact path="/shop/collection" render={() => (<AppController currentPage='collections' />)} />
          <Route exact path="/shop/product/:id" render={(props) => (<AppController currentPage='show' currentId={props.match.params.id} />)} />
          <Route exact path="/register" render={() => (
            this.state.auth
              ? <Redirect to='/profile' />
              : <Register />
          )} />
          <Route exact path="/login" render={() => (
            this.state.auth
              ? <Redirect to='/profile' />
              : <Login />
          )} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
