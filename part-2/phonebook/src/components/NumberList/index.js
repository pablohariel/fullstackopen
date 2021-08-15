const NumberList = ({ filterValue, persons, filteredPersons, handleDelete }) => {
  return (
    <ul>
      { 
        filterValue ? filteredPersons.map(person => <li key={person.name}>{person.name}  {person.phone}</li>) 
        : 
        persons.map(person => {
          return <li key={person.name}>
              <div>
                {person.name}  {person.phone}   
                <button onClick={() => handleDelete(person.id)}>delete</button>
              </div>
            </li>
        })
      }
    </ul>
  )
}

export { NumberList }