import React from 'react';
import Nav  from './components/Nav';
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import ShopBy from './components/ShopBy'
import AppController from './components/AppController'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Auth from './modules/Auth.js'
import Profile from './components/Auth/Profile'
import Cart from './components/Cart'

import './App.css';
import { Redirect, Route } from 'react-router-dom'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
      user: null,
      shouldFireRedirect: false,
      redirectPath: '',
      userId: null
    }
  }

  
  handleFormSubmit = (e, route, values) => {
    e.preventDefault()
    fetch(route, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      },
      body: JSON.stringify(values)
    }).then(res => res.json())
    .then(res => {
      if (res.token) {
        Auth.authenticateToken(res.token)
        this.setState({
          auth: Auth.isUserAuthenticated(),
          shouldFireRedirect: true,
          redirectPath: '/profile',
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }
  
  logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken()
      }
    }).then(res => {
      Auth.deauthenticateUser()
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Nav logout={this.logoutUser} auth={this.state.auth}/>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={ShopBy} />
          <Route exact path="/shop/all" render={() => (<AppController currentPage='index' />)} />
          <Route exact path="/shop/collection" render={() => (<AppController currentPage='collections' />)} />
          <Route exact path="/shop/product/:id" render={(props) => (<AppController currentPage='show' userId={this.state.userId} currentId={props.match.params.id} />)} />
          <Route exact path="/shop/collection/:id/products" render={(props) => (<AppController userId={this.state.userId} currentPage='collectionproducts' currentId={props.match.params.id} />)} />
          <Route exact path="/register" render={() => (
            this.state.auth
              ? <Redirect to='/profile' />
              : <Register handleFormSubmit={this.handleFormSubmit} currentPage='new' />
          )} />
          <Route exact path="/login" render={() => (
            this.state.auth
              ? <Redirect to='/profile' />
              : <Login handleFormSubmit={this.handleFormSubmit} currentPage='login'/>
          )} />
          <Route exact path="/profile" render={() => (
            this.state.auth
              ? <Profile />
              : <Redirect to='/login' />
          )} />
          <Route exact path='/logout' component={Home}/>
          <Route exact path='/cart' component={Cart} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
