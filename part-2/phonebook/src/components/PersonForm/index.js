const PersonForm = ({ handleAdd, newName, setNewName, newPhone, setNewPhone }) => {
  return (
    <form onSubmit={handleAdd}>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input id="name" value={newName} onChange={(event) => setNewName(event.target.value)} />
      </div>
      
      <div className="input-group">
        <label htmlFor="phone">Phone</label>
        <input id="phone" value={newPhone} onChange={(event) => setNewPhone(event.target.value)} />
      </div>

      <button type="submit">add</button>
    </form>
  )
  
}

export { PersonForm }