import React from 'react'
import { Link } from 'react-router-dom'

class ShopBy extends React.Component {
    render() {
        return (
            <div className='shop-by-container'>
                <div className='shop-by-color1'></div>
                <div className='shop-by1'>
                    <h2>Shop all old souls</h2>
                    <Link to='/shop/all' className='shop-button'>Shop</Link>
                </div>
                <div className='shop-by-color2'></div>
                <div className='shop-by2'>
                    <h2>Shop by collection</h2>
                    <Link to='/shop/collection' className='shop-button'>Shop</Link>
                </div>
            </div>
        )
    }
}

export default ShopBy