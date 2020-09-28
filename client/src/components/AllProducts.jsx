import React from 'react'
import { Link } from 'react-router-dom'

class AllProducts extends React.Component {

        allProductsMap = () => {
            return (
                this.props.allProductsData.map((product, i) => {
                    return <div className='product' key={i}>
                        <img className='product-image-tile'src={product.images} />
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
                        <div className='product-image-container'><img className='product-image-tile'src={product.images} /></div>
                        <Link to={`/shop/product/${product.id}`}><h4>{product.title}</h4></Link>
                        <p>${product.price} + shipping</p>
                    </div>
                })
            )

        }

    render() {
        return (
            <>
            <div className='shop-button-container'>
                {(this.props.currentPage === 'index') ? <Link to='/shop/collection' className='shop-button'>Shop by collection</Link> : <Link to='/shop/all' className='shop-button'>Shop all products</Link>}
                {this.props.currentPage === 'collectionproducts' && <Link to='/shop/collection' className='shop-button'>Back to collections</Link>}
            </div>
            <div className='products-container'>
                {this.props.currentPage === 'index' && this.allProductsMap() }
                {this.props.currentPage === 'collectionproducts' && this.collectionProductsMap() }
            </div>
            </>
        )
    }
}

export default AllProducts