import React from 'react'
import { Link } from 'react-router-dom'

class Collections extends React.Component {
    render(props) {
        return (
            <main className='collections-container'>
                {this.props.allCollectionData.map((collection, i) => {
                        return <Link key={i} to='/collection/products'><div className='collection'>
                            <h1>{collection.title}</h1>
                        </div></Link>
                })}
            </main>
        )
    }
}

export default Collections