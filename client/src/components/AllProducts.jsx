import React from 'react'
import { Link } from 'react-router-dom'

class AllProducts extends React.Component {

        allProductsMap = () => {
            return (
                this.props.allProductsData.map((product, i) => {
                    return <div className='product' key={i}>
                            <Link to={`/shop/product/${product.id}`}><h3>{product.title}</h3></Link>
                            <p>{product.description}</p>
                            <p>${product.price} + shipping</p>
                           </div>
                })
            )
 
        }

        collectionProductsMap = () => {
            return (
                this.props.collectionProductsData.map((product, i) => {
                    return <div className='product' key={i}>
                        <Link to={`/shop/product/${product.id}`}><h3>{product.title}</h3></Link>
                        <p>{product.description}</p>
                        <p>${product.price} + shipping</p>
                    </div>
                })
            )

        }

    render() {
        return (
            <>
                {this.props.currentPage === 'index' && this.allProductsMap() }
                {this.props.currentPage === 'collectionproducts' && this.collectionProductsMap() }
            </>
        )
    }
}

export default AllProducts