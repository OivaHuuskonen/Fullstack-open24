import React from "react";

const PersonForm = ({addPerson, newPerson, handlePersonChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={ addPerson }>
            <div>
               name and number <br></br><input value={newPerson}
                      onChange={handlePersonChange}/> <br/>
                      <input value={newNumber}
                      onChange={handleNumberChange}/>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm