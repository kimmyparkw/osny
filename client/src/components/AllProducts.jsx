import React from 'react'
import { Link } from 'react-router-dom'

class AllProducts extends React.Component {

        allProductsMap = () => {
            return (
                this.props.allProductsData.map((product, i) => {
                    return <div className='product' key={i}>
                        <div className='product-image-container'>image goes here</div>
                        <Link to={`/shop/product/${product.id}`}><h4>{product.title}</h4></Link>
                        <p>${product.price} + shipping</p>
                    </div>
                })
            )
 
        }

        collectionProductsMap = () => {
            return (
                this.props.collectionProductsData.map((product, i) => {
                    return <div className='product' key={i}>
                        <div className='product-image-container'>image goes here</div>
                        <Link to={`/shop/product/${product.id}`}><h4>{product.title}</h4></Link>
                        <p>${product.price} + shipping</p>
                    </div>
                })
            )

        }

    render() {
        return (
            <div className='products-container'>
                {this.props.currentPage === 'index' && this.allProductsMap() }
                {this.props.currentPage === 'collectionproducts' && this.collectionProductsMap() }
            </div>
        )
    }
}

export default AllProducts