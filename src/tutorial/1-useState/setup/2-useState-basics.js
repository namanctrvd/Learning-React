import React, { useState } from 'react';


const UseStateBasics = () => {
  const [text, setText] = useState("Random Text");
  const handleClick = () => {
    if (text === 'Random text') {
      setText('New Text');
    } else {
      setText("Random text");
    }
  }
  
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
