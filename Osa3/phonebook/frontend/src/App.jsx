import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Header from './components/Header'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Footer from './components/Footer'
import Notification from './components/Notification'

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

const App = () => {
  //console.log('App toimii...')

  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [notificationMessage, setNotificationMessage] = useState(null)

  //const [ siteMessage, setSiteMessage] = useState(null)
  //const [ siteMessageType, setSiteMessageType ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  const displayMessage = (message, color = "notification") => {
    setNotificationMessage({ message, color })
    setTimeout(() => setNotificationMessage(null), 5000)
  }
//alla uus
  /*useEffect(() => {
    if (notificationMessage) {
      const timeout = setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
  
      return () => clearTimeout(timeout);
    }
  }, [notificationMessage]);*/

  const addPerson = (event) => {
    event.preventDefault();
    const filteredPersons = persons.filter((person) => person.name === newPerson);
    if (filteredPersons.length !== 0) {
      const person = filteredPersons[0];
      const id = person.id;
      const confirmMessage = `${person.name} is already added to the phonebook, do you want to replace the old number with the new one?`;
  
      // Wrap the confirm dialog in a setTimeout to give the state updates time to complete
      setTimeout(() => {
        if (window.confirm(confirmMessage)) {
          const changedPerson = { ...person, number: newNumber };
          personService
            .update(id, changedPerson)
            .then((returnedPerson) => {
              setPersons((prevPersons) =>
                prevPersons.map((p) => (p.id !== id ? p : returnedPerson))
              );
              displayMessage(`Number updated for ${returnedPerson.name} successfully`);
              setNewPerson('');
              setNewNumber('');
            })
            .catch((error) => {
              if (error.response.data.error === 'number not valid') {
                displayMessage(error.response.data.error, 'error');
              } else {
                displayMessage(`Information of ${person.name} has already been deleted from the server`, 'error');
                setPersons((prevPersons) => prevPersons.filter((e) => e.id !== person.id));
              }
            });
        }
      }, 0); // Execute the confirm dialog asynchronously
    } else {
      const personObject = {
        name: newPerson,
        number: newNumber,
      };
      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons((prevPersons) => prevPersons.concat(returnedPerson));
          displayMessage(`Added ${returnedPerson.name} successfully`);
          setNewPerson('');
          setNewNumber('');
        })
        .catch((error) => {
          displayMessage(error.response.data.error, 'error');
        });
    }
  };


/*
  const addPerson = async (event) => {
    event.preventDefault();
    const filteredPersons = persons.filter((person) => person.name === newPerson);
    if (filteredPersons.length !== 0) {
      const person = filteredPersons[0];
      const id = person.id;
      const confirmMessage = `${person.name} is already added to the phonebook, do you want to replace the old number with the new one?`;
      if (window.confirm(confirmMessage)) {
        try {
          const changedPerson = { ...person, number: newNumber };
          const returnedPerson = await personService.update(id, changedPerson);
          setPersons((prevPersons) =>
            prevPersons.map((p) => (p.id !== id ? p : returnedPerson))
          );
          displayMessage(`Number updated for ${returnedPerson.name} successfully`);
          setNewPerson('');
          setNewNumber('');
        } catch (error) {
          if (error.response.data.error === 'number not valid') {
            displayMessage(error.response.data.error, 'error');
          } else {
            displayMessage(`Information of ${person.name} has already been deleted from the server`, 'error');
            setPersons((prevPersons) => prevPersons.filter((e) => e.id !== person.id));
          }
        }
      }
    } else {
      try {
        const personObject = {
          name: newPerson,
          number: newNumber,
        };
        const returnedPerson = await personService.create(personObject);
        setPersons((prevPersons) => prevPersons.concat(returnedPerson));
        displayMessage(`Added ${returnedPerson.name} successfully`);
        setNewPerson('');
        setNewNumber('');
      } catch (error) {
        displayMessage(error.response.data.error, 'error');
      }
    }
  };*/


  //vika ennen remove settimeout
  /*
    const addPerson = (event) => {
    event.preventDefault();
    const filteredPersons = persons.filter((person) => person.name === newPerson);
  
    if (filteredPersons.length !== 0) {
      const person = filteredPersons[0];
      const id = person.id;
      const confirmMessage = `${person.name} is already added to the phonebook, do you want to replace the old number with the new one?`;
  
      if (window.confirm(confirmMessage)) {
        const changedPerson = { ...person, number: newNumber };
        personService
          .update(id, changedPerson)
          .then((returnedPerson) => {
            setPersons((prevPersons) =>
              prevPersons.map((p) => (p.id !== id ? p : returnedPerson))
            );
            displayMessage(`Number updated for ${returnedPerson.name} successfully`);
            setNewPerson('');
            setNewNumber('');
          })
          .catch((error) => {
            if (error.response.data.error === 'number not valid') {
              displayMessage(error.response.data.error, 'error');
            } else {
              displayMessage(`Information of ${person.name} has already been deleted from the server`, 'error');
              setPersons((prevPersons) => prevPersons.filter((e) => e.id !== person.id));
            }
          });
      }
    } else {
      const personObject = {
        name: newPerson,
        number: newNumber,
      };
      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons((prevPersons) => prevPersons.concat(returnedPerson));
          displayMessage(`Added ${returnedPerson.name} successfully`);
          setNewPerson('');
          setNewNumber('');
        })
        .catch((error) => {
          displayMessage(error.response.data.error, 'error');
        });
    }
  };*/




//vika ennen 3 alla
/*  const addPerson = (event) => {
    event.preventDefault();
    
    const existingPerson = persons.find((person) => person.name === newPerson);
  
    if (existingPerson) {
      const confirmMessage = `${existingPerson.name} is already added to the phonebook. Do you want to replace the old number with a new one?`;
      if (window.confirm(confirmMessage)) {
        const changedPerson = { ...existingPerson, number: newNumber };
  
        personService
          .update(existingPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map((p) => (p.id !== existingPerson.id ? p : returnedPerson)));
            displayMessage(`Number updated for ${returnedPerson.name} successfully`);
            setNewPerson('');
            setNewNumber('');
          })
          .catch((error) => {
            if (error.response.data.error === "number not valid") {
              displayMessage(error.response.data.error, "error");
            } else {
              displayMessage(`Information of ${existingPerson.name} has already been deleted from the server`, "error");
              setPersons(persons.filter((p) => p.id !== existingPerson.id));
            }
          });
      }
    } else {
      const personObject = {
        name: newPerson,
        number: newNumber,
      };
  
      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          displayMessage(`Added ${returnedPerson.name} successfully`);
          setNewPerson('');
          setNewNumber('');
        })
        .catch((error) => {
          displayMessage(error.response.data.error, "error");
        });
    }
  };*/












  //uus

  /*const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      // receives content from the components newName state
      name: newName,
      number: newNumber,
    }

    const existing_names = persons.map(person => person.name)

    if (existing_names.includes(newName)) {
      const msg = `${newName} is already added to the phonebook. Replace the old number with the new one?`
      const confirm = window.confirm(msg)
      if (confirm) {
        updateName(nameObject)
      }
    } else {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          resetNewState()
          setSiteMessage(`Added ${returnedPerson.name}.`)
          setSiteMessageType('info')
          setTimeout(() => {
            setSiteMessage(null)
          }, 5000)
        })
    }
  } */

 /* const updateName = (nameObject) => {
    const update_person = persons.find(p => p.name === nameObject.name)
    const update_id = update_person.id
    personService
    .update(update_id, nameObject)
    .then(returnedPerson =>
      setPersons(persons.map(person => person.id !== update_id ? person : returnedPerson))
    )
    .catch(error => {
      setSiteMessage(`Note ${nameObject.name} not found. ${error}`)
      setSiteMessageType('error')
      setTimeout(() => {
        setSiteMessage(null)
      }, 5000)
      setPersons(persons.filter(p => p.id !== update_id))
    })
  }

  const deleteName = (person) => {
    const msg = `Delete ${person.name}?`
    const confirm = window.confirm(msg)
    if (confirm) {
      personService
        .deletePerson(person.id)
        .then(persons =>
          setPersons(persons)
    )}
  }*/

  //uus

  /*const displayMessage = (message, color = 'notification') => {
    setNotificationMessage({ message, color });
  };*/
  
  /*useEffect(() => {
    if (notificationMessage) {
      const timeout = setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
  
      return () => clearTimeout(timeout);
    }
  }, [notificationMessage]);*/
  

  /*const addPerson = (event) => {
    event.preventDefault()
   // console.log('button clicked', event.target)

    const filteredPersons = persons.filter((person) => person.name === newPerson)
    if (filteredPersons.length > 0) {
      const person = filteredPersons[0]
      const id = person.id
      const confirmMessage = `${person.name} is already added to the phonebook, do you want replace the old number to new one?`

      if (window.confirm(confirmMessage)) {
        const changedPerson = { ...person, number: newNumber}
        
      personService
      .update(id, changedPerson)
      .then((returnedPerson) => {
        setPersons(persons.map((p) => (p.id !== id ? p: returnedPerson)))
      displayMessage(`Number updated for ${returnedPerson.name} sucessfully`)
        setNewPerson('')
        setNewNumber('')
        setFilter('')
      })
      .catch((error) => {
        if (error.response.data.error === "numer not valid") {
          displayMessage(error.response.data.error, "error")
        }
        else {
          displayMessage (`information of ${person.name} has already been deleted from server`, "error")
          setPersons(persons.filter((e) => e.id !== person.id))
        } 
      })
      }
      } else {
      const personObject = {
      name: newPerson,
      number: newNumber,
      //id: persons.length + 1,
    }
    personService
      .create(personObject)
      .then((returnedPerson) => {
    setPersons(persons.concat(returnedPerson))
    displayMessage(`Added ${returnedPerson.name} sucessfully`)
    setNewPerson('')
    setNewNumber('')
  })
  .catch((error) => {
    displayMessage(error.response.data.error, "error")
  })
}
}*/

/// alla vanha

/*const addPerson = (event) => {
  event.preventDefault();
  const filteredPersons = persons.filter((person) => person.name === newPerson);

  if (filteredPersons.length > 0) {
    const person = filteredPersons[0];
    const id = person.id;
    const confirmMessage = `${person.name} is already added to the phonebook, do you want to replace the old number with the new one?`;

    if (window.confirm(confirmMessage)) {
      const changedPerson = { ...person, number: newNumber };

      personService
        .update(id, changedPerson)
        .then((returnedPerson) => {
          setPersons(persons.map((p) =>
             (p.id !== id ? p : returnedPerson))
          );
          displayMessage(`Number updated for ${returnedPerson.name} successfully`);
          setNewPerson('');
          setNewNumber('');
          setFilter('');
        })
        .catch((error) => {
          if (error.response.data.error === 'number not valid') {
            displayMessage(error.response.data.error, 'error');
          } else {
            displayMessage(
              `Information of ${person.name} has already been 
              deleted from the server`, 'error');
            setPersons(persons.filter((e) => e.id !== person.id));
          }
        });
    }
  } else {
    const personObject = {
      name: newPerson,
      number: newNumber,
    };
    personService
      .create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        displayMessage(`Added ${returnedPerson.name} successfully`);
        setNewPerson('');
        setNewNumber('');
      })
      .catch((error) => {
        displayMessage(error.response.data.error, 'error');
      });
  }
}; */

/*
const addPerson = (event) => {
  event.preventDefault();
  
  const existingPerson = persons.find((person) => person.name === newPerson);

  if (existingPerson) {
    const confirmMessage = `${existingPerson.name} is already added to the phonebook. Do you want to replace the old number with a new one?`;
    if (window.confirm(confirmMessage)) {
      const changedPerson = { ...existingPerson, number: newNumber };

      personService
        .update(existingPerson.id, changedPerson)
        .then((returnedPerson) => {
          setPersons(persons.map((p) => (p.id !== existingPerson.id ? p : returnedPerson)));
          displayMessage(`Number updated for ${returnedPerson.name} successfully`);
          setNewPerson('');
          setNewNumber('');
        })
        .catch((error) => {
          if (error.response.data.error === "number not valid") {
            displayMessage(error.response.data.error, "error");
          } else {
            displayMessage(`Information of ${existingPerson.name} has already been deleted from the server`, "error");
            setPersons(persons.filter((p) => p.id !== existingPerson.id));
          }
        });
    }
  } else {
    const personObject = {
      name: newPerson,
      number: newNumber,
    };

    personService
      .create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        displayMessage(`Added ${returnedPerson.name} successfully`);
        setNewPerson('');
        setNewNumber('');
      })
      .catch((error) => {
        displayMessage(error.response.data.error, "error");
      });
  }
};*/

  const handlePersonChange = (event) => {
    //console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  } 

  const handleFilterChange =(event)=> {
    setFilter (event.target.value)
  } 

  const deletePerson = person => {

    if (window.confirm(`delete ${person.name} ???`)){
      const id = person.id
          
          personService
          .deletePerson(person.id)
          .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          displayMessage(`delete number for ${person.name} sucessfully`) 
            })
            .catch(() => {
              displayMessage(`information of ${person.name} has already been deleted from server`, "error")
              setPersons(persons.filter(e => e.id !== person.id))
            })
            }
            }; 

  return (
    <div className="App">
      <br></br><br></br><br></br>
      <Header />
      <Notification notification={notificationMessage}
     // msg={siteMessage} type={siteMessageType}      
     />
      <br></br>

        <Filter 
         setFilter={setFilter} 
         handleFilterChange={handleFilterChange}
        />
     
       <br></br>

       <PersonForm 
        addPerson={addPerson}
        newPerson={newPerson}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
       />
        
       <React.StrictMode>
       <div>
       <Persons 
        persons={persons} 
        filter={filter} 
        deleteButton={deletePerson}
        />
        </div>
        </React.StrictMode>
       <br></br>
       <Footer />
       <br></br><br></br><br></br><br></br>
    </div>

)
}

export default App









  
 



