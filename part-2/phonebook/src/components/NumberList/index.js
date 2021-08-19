const NumberList = ({ filterValue, contacts, filteredContacts, handleDelete }) => {
  return (
    <ul>
      { 
        filterValue ? filteredContacts.map(contact => {
          return <li key={contact._id}>
            <div>
              {contact.name}  {contact.number}
              <button onClick={() => handleDelete(contact._id)}>delete</button>
            </div>
          </li>
        }) 
        : 
        contacts.map(contact => {
          return <li key={contact._id}>
              <div>
                {contact.name}  {contact.number}   
                <button onClick={() => handleDelete(contact._id)}>delete</button>
              </div>
            </li>
        })
      }
    </ul>
  )
}

export { NumberList }