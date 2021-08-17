import { useState, useEffect } from 'react'

import { personService } from './services/PersonService'

import { SearchFilter } from './components/SearchFilter'
import { PersonForm } from './components/PersonForm'
import { NumberList } from './components/NumberList'
import { NotificationMessage } from './components/NotificationMessage'

import './App.css'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const [notification, setNotification] = useState(false)

  useEffect(() => {
    personService.get().then(response => setPersons(response))
  }, [])

  const filteredPersons = filterValue ? persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())) : []

  const handleAdd = (event) => {
    event.preventDefault()
    const alreadyExists = persons.find(person => person.name === newName)

    const newPerson = {
      name: newName,
      number: newNumber
    }

    if(alreadyExists !== undefined) {
      const result = window.confirm(`Name ${newName} is already added to phonebook, replace the old number with a new one?`)

      if(!result) return

      personService.update(alreadyExists.id, newPerson)
        .then(response => {
          setPersons([...persons.filter(person => person.id !== alreadyExists.id), response])

          setNotification({ message: 'User updated', type: 'success' })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(() => {
          setNotification({ message: 'User already deleted', type: 'error' })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })

      return
    }

    personService.create(newPerson)
      .then(response => {
        setPersons([...persons, response])
        setNotification({ message: 'User added', type: 'success' })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
  }

  const handleDelete = (id) => {
    const result = window.confirm('Delete person?')
    if(result) {
      personService.delete(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))

          setNotification({ message: 'User deleted', type: 'success' })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(() => {
          setNotification({ message: 'User already deleted', type: 'error' })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
  }

  return (
    <div className="App">
      {notification && <NotificationMessage message={notification.message} type={notification.type} />}

      <SearchFilter filterValue={filterValue} setFilterValue={setFilterValue} />

      <h2>Phonebook</h2>
      <PersonForm 
        handleAdd={handleAdd} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
      />
      
      <h2>Numbers</h2>
      <NumberList filterValue={filterValue} persons={persons} filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
