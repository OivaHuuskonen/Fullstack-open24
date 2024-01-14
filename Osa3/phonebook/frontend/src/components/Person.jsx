import React from 'react';

const Person = ({ person, deleteButton }) => {

    return (
      <ul>
      {person.name} {person.number}
      <button className="delete" onClick ={() => deleteButton(person)}> delete</button> 
      </ul>
    )
  }
  
  export default Person;
