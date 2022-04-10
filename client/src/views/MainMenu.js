import React from 'react';
import OrderSummary from '../components/menu/OrderSummary/OrderSummary';
import InfoItem from '../components/item/InfoItem';
import ListItem from '../components/item/ListItem';

import Filter from '../components/filter/Filter';

const MainMenu = () => {
  return (
    <div>
      {/* <OrderSummary listFood={[]} /> */}
      <Filter />
    </div>
    
  )
}

export default MainMenu