import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {

    const{food_list} = useContext(StoreContext)

  return (
     <div className='food-display' id='food-display'>
   <h2> Top Dishes Near You</h2>
   <div className="food-display-list">
   {food_list.map((item) => (
          <FoodItem key={item._id} item={item} />
        ))}
    </div>
    </div>
  )
}

export default FoodDisplay