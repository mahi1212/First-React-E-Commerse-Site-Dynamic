import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res=> res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        })},
    [])
    
    // Adding cart from local storage ||| MOST HARD IGNORE IF DON'T GET THIS EASILY  
    useEffect(()=> {
        if(products.length){
            const savedCart = getStoredCart()
            const storedCart= []
            for(const key in savedCart){
                const addedProduct = products.find(product=> product.key === key)
                storedCart.push(addedProduct)
            }
            setCart(storedCart)
        }
        
    }, [products])

    const handleAddBtn = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        // Save to local storage
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProduct)
    }

    return (
        <div>
            <div className="search-bar">
                <span>Search here : </span><input type="text" onChange={handleSearch} placeholder='Search your favourite product' />
            </div>
            <div className='shop'>
                <div className="product-part">
                    {
                        displayProducts.map(product=> <Product 
                            key={product.key} handleAddBtn={handleAddBtn}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className="cart-part">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;