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

import './App.css';
import { Redirect, Route } from 'react-router-dom'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated,
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
    e.preventDefault()
    fetch(route, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      console.log(res)
      if (res.token) {
        Auth.authenticateToken(res.token)
        this.setState({
          auth: Auth.isUserAuthenticated(),
          loginUserName: '',
          loginPassword: '',
          registerUserName: '',
          registerEmail: '',
          registerPassword: '',
          registerName: '',
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
      console.log("testing logout", this.state.auth)
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
    })
  }

  // componentDidMount() {
  //   this.props.resetFireRedirect()
  //   fetch('/profile', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Token ${Auth.getToken()}`,
  //       token: `${Auth.getToken()}`,
  //     }
  //   })
  // }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav logout={this.logoutUser} />
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
              : <Login handleFormSubmit={this.handleFormSubmit} currentPage='login' />
          )} />
          <Route exact path='/logout' component={Home}/> 
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
