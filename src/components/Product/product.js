import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {

    const {key, name, img, price, stock, seller} = props.product
    return (
        <div className='Products'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-dtls'>
                <h3 className='product-name'>{name}</h3>
                <h5>By: {seller}</h5>
                <h3>Price: {price}</h3>
                <p>Only {stock} left in stock order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className='reguler-btn'> <FontAwesomeIcon icon={faShoppingCart} /> Add to product</button>
            </div>
        </div>
    );
};

export default Product;