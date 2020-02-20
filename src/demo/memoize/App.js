import React, { useState, useRef, useCallback } from 'react';

import FrequentlyUpdating from './components/FrequentlyUpdating';
import AddToCartButton from './components/AddToCartButton';

import logo from '../../img/logo.svg'

const App = () => {
  const price = useRef(1000);
  const lastUpdated = useRef(new Date());
  const [numberOfSales, setNumberOfSales] = useState(0);

  const onAddToCartButtonClick = useCallback(
    () => {
      setNumberOfSales(numberOfSales + 1)
    },
    [numberOfSales]
  );

  return (
    <div className='App'>
      <div className="content">

        <hgroup>
          <h1>React.memo() Demo</h1>
          <h3>Hint: Observe the console.log() statements, and the DOM updates</h3>
        </hgroup>

        <FrequentlyUpdating numberOfSales={numberOfSales} price={price.current} lastUpdated={lastUpdated.current} />
        <AddToCartButton
          onClick={onAddToCartButtonClick} />
      </div>
      <div className="footer">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default App;
