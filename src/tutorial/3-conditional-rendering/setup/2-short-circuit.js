import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const text = "";
  const [isError, setIsError] = useState(false);
  
  return <>
  {text || <h1>Hello World!</h1> }
    <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
  {isError && <h1>Error...</h1> }
  {isError ? ( 
    <div>
      <h2>there is an error...</h2>
    </div>
   ) : ( 
    <div>
      <h2>There is no error.</h2>
    </div>
   )}
  </>;
};

export default ShortCircuit;
