import React from 'react';
import CustomButon from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
            <div className='collection-footer'> 
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButon inverted>Add to cart</CustomButon>
    </div>
);

export default CollectionItem;