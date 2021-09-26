import React from 'react';

const Cart = (props) => {
    // total price
    const {cart} = props;
    const totalReducer = (previous , product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);

    // let total = 0;
    // for (const product of cart){
    //     total = total + product.price;
    // }

    const shipping =total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    return (
        <div>
            <h3>Order summary</h3>
            <h4>Items orderd: {props.cart.length}</h4>
            <h2>Total {total.toFixed(2)}</h2>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
        </div>
    );
};

export default Cart;