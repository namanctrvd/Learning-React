import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000)
  }
  return <>
  <section>
    <h2>Counter</h2>
    <h2>{value}</h2>
    <button className='btn' onClick={() => setValue(value-1)}>Decrease</button>
    <button className='btn' onClick={() => setValue(0)}>Reset</button>
    <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
    <button className='btn' onClick={complexIncrease}>Complex Increase</button>
  </section>
  </>
};

export default UseStateCounter;
