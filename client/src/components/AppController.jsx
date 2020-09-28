import React from 'react'
// import { Redirect } from 'react-router-dom'
import AllProducts from './AllProducts'
import Collections from './Collections'
import SingleProduct from './SingleProduct'
// import Cart from './Cart'

class AppController extends React.Component {
    constructor(props) {
        super(props)
        this.state=({
            isLoaded: false,
            allData: null,
            allProductsData: null,
            singleProductData: null,
            allCollectionData: null,
            collectionProductsData: null,
            currentPage: props.currentPage,
            currentId: props.currentId,
            orderId: null,
            orderItems: [],
        })
    }

    getAllProductsData = () => {
        fetch('/products')
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                allProductsData: res
            })
        })
    }

    getSingleProduct = () => {
        fetch(`/products/${this.state.currentId}`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                singleProductData: res
            })
        })
    }

    getAllCollections = () => {
        fetch('/collections')
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                allCollectionData: res
            })
        })
    }

    getCollectionProducts = () => {
        fetch(`/collections/${this.state.currentId}/products`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                collectionProductsData: res,
            })
        })
    }

    // startOrder = () => {
    //     console.log('startorder happening')
    //     fetch(`/user/${this.props.userId}/orders`, {
    //       method: "POST",
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({user_id: this.props.userId})
    //     }).then(res => res.json())
    //     .then(res => {
    //       this.setState({
    //         orderId: res.id
    //       })
    //       localStorage.setItem('order', this.state.orderId)
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }
    
    //   addToOrder = (productId) => {
    //       console.log('addtoorder happening')
    //     fetch(`/user/${this.props.userId}/order/${this.state.orderId}`, {
    //       method: "POST",
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({order_id: this.state.orderId, product_id: productId})
    //     }).then(res => res.json())
    //     .then(res => {
    //         fetch(`/products/${res.product_id}`)
    //         .then(res => res.json())
    //         .then(res => {
    //             this.state.orderItems.push(res)
    //         })
    //       console.log('order items', this.state.orderItems)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    //   }
    
    //   userOrders = (productId) => {
    //     if (this.state.orderId) {
    //       this.addToOrder(productId)
          
    //     }
    //     else {
    //       this.startOrder()
    //     }
    //   }    

    componentDidMount() {
        if (this.state.currentPage === 'index') {
            this.getAllProductsData()
        } else if (this.state.currentPage === 'collections') {
            this.getAllCollections()
        } else if (this.state.currentPage === 'show') {
            this.getSingleProduct()
        }  else if (this.state.currentPage === 'collectionproducts') {
            this.getCollectionProducts()
        } 
        // else if (this.state.currentPage === 'cart') {
        //     this.userOrders()
        // }
    }

    decideWhichToRender() {
        switch(this.state.currentPage) {
            default: case 'index':
                return <AllProducts currentPage={this.state.currentPage} allProductsData={this.state.allProductsData} />
            case 'collections':
                return <Collections allCollectionData={this.state.allCollectionData} />
            case 'show':
                return <SingleProduct singleProductData={this.state.singleProductData} userId={this.props.userId} userOrders={this.userOrders} />
            case 'collectionproducts':
                return <AllProducts currentPage={this.state.currentPage} collectionProductsData={this.state.collectionProductsData} />
            // case 'cart':
            //     return <Cart orderId={this.state.orderId} />
        }
    }

    render() {
        return (
                (this.state.isLoaded) ? this.decideWhichToRender() : <h1>Loading...</h1>
        )
    }

}


export default AppController
