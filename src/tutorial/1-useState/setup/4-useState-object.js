import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Naman",
    age: 21,
    message: "Learning react" 
  });
  const changeMessage = () => {
    if (person.message === "Learning react") {
      setPerson({ ...person, message: "For placements" });
    }
    else {
      setPerson({ ...person, message: "Learning react" });
    }
  }
  return (
    <>
      <div className='item'>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
      </div>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
