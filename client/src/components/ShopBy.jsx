import React from 'react'
import { Link } from 'react-router-dom'

class ShopBy extends React.Component {
    render() {
        return (
            <main className='shop-by'>
                <div className='shop-all'>
                    <h1>Shop all old souls</h1>
                    <Link to='/shop/all'>Shop</Link>
                </div>
                <div className='shop-collection'>
                    <h1>Shop by collection</h1>
                    <Link to='/shop/collection'>Shop</Link>
                </div>
            </main>
        )
    }
}

export default ShopBy