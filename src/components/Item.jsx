import React from 'react';
import placeholderImage from '../assets/images/150.png';

const Item = ({ id, name, price, removeItem, quantity, increaseItemQuantity, decreaseItemQuantity }) => {
    return ( 
        <div className="item-container">
            <div className="item-details-container">
                <div className="item-details">
                    <img src={placeholderImage} alt="item"/>
                    <p>{name}</p>
                </div>
                <button className="btn remove" onClick={() => removeItem(id)}>X</button>
            </div>
            <div className="quantity-container">
                <button className="btn decrease" onClick={() => decreaseItemQuantity(id)}>-</button>
                <h4>{quantity}</h4>
                <button className="btn increase" onClick={() => increaseItemQuantity(id)}>+</button>
            </div>
            <div className="price-container">
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Item;