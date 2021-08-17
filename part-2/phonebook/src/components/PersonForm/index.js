const PersonForm = ({ handleAdd, newName, setNewName, newNumber, setNewNumber }) => {
  return (
    <form onSubmit={handleAdd}>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input id="name" value={newName} onChange={(event) => setNewName(event.target.value)} />
      </div>
      
      <div className="input-group">
        <label htmlFor="number">Number</label>
        <input id="number" value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
      </div>

      <button type="submit">add</button>
    </form>
  )
  
}

export { PersonForm }