import React, { useState, useRef } from 'react';

import FrequentlyUpdating from './components/FrequentlyUpdating';
import SellButton from './components/SellButton';

const App = () => {
  const price = useRef(1000);
  const lastUpdated = useRef(new Date());
  const [numberOfSales, setNumberOfSales] = useState(0);

  return (
    <div className='App'>
      <SellButton
        onClick={() => {
          setNumberOfSales(numberOfSales + 1)
        }} />
      <FrequentlyUpdating numberOfSales={numberOfSales} price={price.current} lastUpdated={lastUpdated.current}/>
    </div>
  );
};

export default App;
