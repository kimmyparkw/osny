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
      shouldFireRedirect: false,
      redirectPath: '',
      orderId: null,
      userId: null,
    }
  }

  startOrder = () =>{
    fetch(`/user/${this.state.userId}/orders`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // token: Auth.getToken(),
        // 'Authorization': `Token ${Auth.getToken()}`
      },
      body: JSON.stringify({user_id: this.state.userId})
    }).then(res => res.json())
    .then(res => {
      this.setState({
        orderId: res.id
      })
    }).catch(err => {
      console.log(err)
    })
  }

  addToOrder = (productId) => {
    console.log('product id', this.state.currentId)
    fetch(`/user/${this.state.userId}/order/${this.state.orderId}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // token: Auth.getToken(),
        // 'Authorization': `Token ${Auth.getToken()}`
      },
      body: JSON.stringify({order_id: this.state.orderId, product_id: productId})
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(err => {
      console.log(err)
    })
  }

  userOrders = (productId) => {
    if (this.state.orderId) {
      this.addToOrder(productId)
      console.log('user order product id', productId)
    }
    else {
      this.startOrder()
    }
  }


  handleFormSubmit = (e, route, values) => {
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

  componentDidMount() {
    fetch('/profile', {
      headers: {
          token: Auth.getToken(),
          'Authorization': `Token ${Auth.getToken()}`
      }
    })
    .then(res => res.json())
    .then(res => {
        this.setState({
            user: res,
            userId: res.user.id
        })
    })
  }
  
  
  // setUser = (userData) => {
  //   console.log(this.state.auth)
  //   this.setState({
  //     user: userData,
  //     userId: userData.user.id
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Nav logout={this.logoutUser} auth={this.state.auth}/>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={ShopBy} />
          <Route exact path="/shop/all" render={() => (<AppController currentPage='index' userId={this.state.userId} />)} />
          <Route exact path="/shop/collection" render={() => (<AppController currentPage='collections' />)} />
          <Route exact path="/shop/product/:id" render={(props) => (<AppController currentPage='show' userOrders={this.userOrders} currentId={props.match.params.id} />)} />
          <Route exact path="/shop/collection/:id/products" render={(props) => (<AppController currentPage='collectionproducts' currentId={props.match.params.id} />)} />
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
