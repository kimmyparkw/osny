import React from 'react'
import { Link } from 'react-router-dom'

class SingleProduct extends React.Component {
    render() {
        return (
            <main className='single-product-container'>
                <div><img className='product-image' src={this.props.singleProductData.images} /></div>
                <div className='right-page'>
                    <div className='product-details'>
                        <h3>{this.props.singleProductData.title}</h3>
                        <p>{this.props.singleProductData.description}</p>
                        <p>${this.props.singleProductData.price}</p>
                        <button>Add to cart</button>
                    </div>
                    <div className='shop-button-container'>
                        <Link to='/shop/all' className='shop-button'>Back to all products</Link>
                        <Link to='/shop/collection' className='shop-button'>Back to collections</Link>
                    </div>
                </div>
            </main>
        )
    }
}

export default SingleProduct