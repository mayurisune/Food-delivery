import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { food_list } from '../../assets/assets'
const FoodItem = ({item}) => {
const [itemcount, setItemCount]=useState(0);
  return (
    <div className="food-item">
        <div className="food-item-img-container">
        <img className='food-item-image' src={item.image} alt='' />
        {
          !itemcount
          ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=''></img>
          :<div className='food-item-counter'>
           <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt=''></img>
           <p>{itemcount}</p>
           <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt=''></img>
          </div>
        }
        </div>
    <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{item.name}</p>
            <img src={assets.rating_starts} alt=''/>
        </div>
        <p className="food-item-desc">{item.description}</p>
        <p className="food-item-price">${item.price}</p>
    </div>
    </div>
  )
}

export default FoodItem