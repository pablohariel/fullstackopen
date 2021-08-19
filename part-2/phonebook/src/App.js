import { useState, useEffect } from 'react'

import { contactService } from './services/ContactService'

import { SearchFilter } from './components/SearchFilter'
import { ContactForm } from './components/ContactForm'
import { NumberList } from './components/NumberList'
import { NotificationMessage } from './components/NotificationMessage'

import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const [notification, setNotification] = useState(false)

  useEffect(() => {
    contactService.get().then(response => setContacts(response))
  }, [])

  const filteredContacts = filterValue ? contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase())) : []

  const handleAdd = (event) => {
    event.preventDefault()
    const alreadyExists = contacts.find(contact => contact.name === newName)

    const newContact = {
      name: newName,
      number: newNumber
    }

    if(alreadyExists !== undefined) {
      const result = window.confirm(`Name ${newName} is already added to phonebook, replace the old number with a new one?`)

      if(!result) return

      contactService.update(alreadyExists._id, newContact)
        .then(response => {
          setContacts([...contacts.filter(contact => contact._id !== alreadyExists._id), response])

          setNotification({ message: 'Contact updated', type: 'success' })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(() => {
          setNotification({ message: 'Contact already deleted', type: 'error' })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })

      return
    }

    contactService.create(newContact)
      .then(response => {
        setContacts([...contacts, response])
        setNotification({ message: 'Contact added', type: 'success' })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
  }

  const handleDelete = (id) => {
    const result = window.confirm('Delete person?')
    if(result) {
      contactService.delete(id)
        .then(() => {
          setContacts(contacts.filter(contact => contact._id !== id))

          setNotification({ message: 'Contact deleted', type: 'success' })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch((err) => {
          console.log(err)
          setNotification({ message: 'Contact already deleted', type: 'error' })
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
      <ContactForm 
        handleAdd={handleAdd} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
      />
      
      <h2>Numbers</h2>
      <NumberList filterValue={filterValue} contacts={contacts} filteredContacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
