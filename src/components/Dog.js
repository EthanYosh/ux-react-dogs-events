import React from "react";

const petDog = (dogName) => {
  alert(`You pet ${dogName}`)
} 

function Dog(props) {

  return (
    <div>
      {props.dog.name}
      <button className="pet-btn" onClick={() => petDog(props.dog.name)}>Pet {props.dog.name}</button>
    </div>
  );
}

export default Dog;