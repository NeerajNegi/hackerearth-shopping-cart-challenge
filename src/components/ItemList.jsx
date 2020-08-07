import React from 'react';

import Item from './Item';

const ItemList = ({ items, totalQuantity, removeItem, increaseItemQuantity, decreaseItemQuantity }) => {
    return ( 
        <div className="item-list-container">  
            <hr/>
            <div className="column-header">
                <h4 className="details-header">Items({totalQuantity})</h4>
                <h4>Qty</h4>
                <h4>price</h4>
            </div>
            <hr/>
            { items.map(item => <Item 
                key={item.id} 
                id={item.id}
                name={item.name} 
                price={item.price}
                quantity={item.quantity}
                increaseItemQuantity={increaseItemQuantity}
                decreaseItemQuantity={decreaseItemQuantity}
                removeItem={removeItem}/>
                )
            }
        </div>
    )
}

export default ItemList;