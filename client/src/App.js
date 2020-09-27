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

import './App.css';
import { Redirect, Route } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
// const stripePromise = loadStripe(pk_test_51HVkiOK4H4g8C88dJatdwW2xhsUdlQyJg3aySFB2TlqCG79dhSXN09bH84fsDrY0kLpZSMHioixOpkbw9BHUKr5l00uXetARMS)

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
      user: null,
      loginUserName: '',
      loginPassword: '',
      registerUserName: '',
      registerEmail: '',
      registerPassword: '',
      registerName: '',
      shouldFireRedirect: false,
      redirectPath: '',
    }
  }


  handleFormSubmit = (e, route, values) => {
    console.log('route', route)
    console.log('values', values)
    e.preventDefault()
    fetch(route, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    }).then(res => res.json())
    .then(res => {
      if (res.token) {
        Auth.authenticateToken(res.token)
        this.setState({
          auth: Auth.isUserAuthenticated(),
          shouldFireRedirect: true,
          redirectPath: '/profile'
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
        <Nav logout={this.logoutUser} />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={ShopBy} />
          <Route exact path="/shop/all" render={() => (<AppController currentPage='index' />)} />
          <Route exact path="/shop/collection" render={() => (<AppController currentPage='collections' />)} />
          <Route exact path="/shop/product/:id" render={(props) => (<AppController currentPage='show' currentId={props.match.params.id} />)} />
          <Route exact path="/register" render={() => (
            this.state.auth
              ? <Redirect to='/profile' />
              : <Register handleFormSubmit={this.handleFormSubmit} currentPage='new'/>
          )} />
          <Route exact path="/login" render={() => (
            this.state.auth
              ? <Redirect to='/profile' />
              : <Login handleFormSubmit={this.handleFormSubmit} currentPage='login' />
          )} />
          <Route exact path="/profile" render={() => (
            this.state.auth
              ? <Profile />
              : <Redirect to='/login' />
          )} />
          <Route exact path='/logout' component={Home}/> 
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
