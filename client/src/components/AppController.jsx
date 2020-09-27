import React from 'react'
// import { Redirect } from 'react-router-dom'
import AllProducts from './AllProducts'
import Collections from './Collections'
import SingleProduct from './SingleProduct'

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
            currentId: props.currentId
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
            console.log(this.state.currentPage)
            console.log(res)
            this.setState({
                isLoaded: true,
                collectionProductsData: res,
            })
        })
    }

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
    }

    decideWhichToRender() {
        switch(this.state.currentPage) {
            default: case 'index':
                return <AllProducts currentPage={this.state.currentPage} allProductsData={this.state.allProductsData} />
            case 'collections':
                return <Collections allCollectionData={this.state.allCollectionData} />
            case 'show':
                return <SingleProduct singleProductData={this.state.singleProductData} />
            case 'collectionproducts':
                return <AllProducts currentPage={this.state.currentPage} collectionProductsData={this.state.collectionProductsData} />
        }
    }

    render() {
        return (
                (this.state.isLoaded) ? this.decideWhichToRender() : <h1>Loading...</h1>
        )
    }

}


export default AppController
