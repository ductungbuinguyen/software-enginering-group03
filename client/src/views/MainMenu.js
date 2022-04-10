import React from 'react'
import OrderSummary from '../components/menu/OrderSummary/OrderSummary'
import InfoItem from '../components/item/InfoItem'
import ListItem from '../components/item/ListItem'

const MainMenu = () => {
  return (
    <div>
      <OrderSummary listFood={[]} />
      <ListItem />
    </div>
    
  )
}

export default MainMenu