import React from 'react'
import { Redirect } from 'react-router-dom'
import AllProducts from './AllProducts'

class AppController extends React.Component {
    constructor(props) {
        super(props)
        this.state=({
            isLoaded: false,
            allData: null,
            allProductsData: null,
            singleProductData: null,
            allCollectionData: null,
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
            console.log(this.state.allProductsData)
        })
    }

    // getSingleProduct = () => {
    //     fetch()
    // }

    componentDidMount() {
        if (this.state.currentPage === 'index') {
            this.getAllProductsData()
        } else if (this.state.currentPage === 'show') {
            this.getSingleProduct()
        }
    }

    decideWhichToRender() {
        switch(this.state.currentPage) {
            default: case 'index':
                return <AllProducts allProductsData={this.state.allProductsData} />
            case 'show':
                return <p>Hello world</p>
        }
    }

    render() {
        return (
            <main>
                {(this.state.isLoaded) ? this.decideWhichToRender() : <h1>Loading...</h1>}
            </main>
        )
    }

}


export default AppController
