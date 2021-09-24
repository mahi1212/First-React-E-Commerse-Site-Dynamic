import React from 'react';
import './Product.css'
import Rating from 'react-rating'
const Product = (props) => {
    // console.log(props)
    const {name, img, price, seller, stock, star} = props.product
    return (
        <div className='product'>
            <div className="pic">
                <img src={img} alt="" />
            </div> 
            <div className='info'>
                <h4>Name : {name}</h4>
                <p><small>By : {seller}</small></p>
                <h4>Price : {price}</h4>
                <p>Only {stock} peices left - order soon</p>
                <Rating initialRating={star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                fractions={2} readonly/>
                <br />
                <button className='purchase-btn'
                onClick={()=> props.handleAddBtn(props.product)}
                >Add to cart</button>
            </div>
        </div>
    );
};

export default Product;