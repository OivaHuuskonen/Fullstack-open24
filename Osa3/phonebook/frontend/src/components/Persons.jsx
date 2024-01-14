import React from 'react';
import Person from './Person'

function Persons ({ persons, filter, deleteButton }) {

       // const persons = props.persons
      // const filter = props.filter
       //const deletePerson = props.deletePerson
   
    return (
        <div>
            {persons
               .filter((person) =>
                 person.name.toLowerCase().includes(filter))
                    .map((person) => (
                        /*<ul key={person.id}>
                            <>
                                {person.name} {person.number + "   "} 
                         
                            <button type="button" onClick={() => deletePerson(person.id)}>
                            delete 
                            </button>      
                            </>
                         </ul>*/
                         
                         <Person
                          key = {person.id}
                          person = {person}
                          deleteButton = {deleteButton}
                          />
  
          ))}    
        </div>

   )
}
  
  export default Persons;