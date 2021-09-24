import React from 'react';

const Cart = (props) => {
    // console.log(props)
    const {cart} = props
    let prevPrice = 0
    let shipping= 0
    for(const product of cart){
        prevPrice += product.price
    }

    for(const product of cart){
        shipping += product.shipping
    }

    let tax = 0
    tax = tax + prevPrice * 0.10 
    
    let total = prevPrice+shipping+tax

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered : {props.cart.length}</p>
            <br />
            <div style={{textAlign :'left'}}>
                <p>Price : {prevPrice.toFixed(2)}</p>
                <p>Shipping Cost : {shipping.toFixed(2)}</p>
                <p>Tax : {tax.toFixed(2)}</p>
            </div>
            <hr />
            <strong>Total : {total.toFixed(2)}</strong>
        </div>
    );
};

export default Cart;