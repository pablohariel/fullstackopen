const SearchFilter = ({ filterValue, setFilterValue }) => {
  return (
    <>
      <label htmlFor="filter">filter shown with</label>
      <input id="filter" value={filterValue} onChange={(event) => setFilterValue(event.target.value)} />
    </>
  )
  
}

export { SearchFilter }