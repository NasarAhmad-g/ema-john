import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/product';
import './Shop.css';

const Shop = () => {

    const [products, setproducts] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect( ()=>{
        fetch('./products.JSON')
        .then(res =>res.json())
        .then(data => setproducts(data));
    }, [])

    const handleAddToCart = product => {
        const newCart =[...cart, product];
        setcart(newCart);
    }



    return (
        <div className='product-container'>
            <div className="product">
                {
                    products.map(product => <Product 
                        key={product.key}
                        product={product} 
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="product-cart">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;