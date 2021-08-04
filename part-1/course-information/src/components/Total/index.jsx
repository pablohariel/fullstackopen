const Total = ({ parts = [] }) => {
  const total = parts.map(part => part.exercises).reduce((accumulator, item) => accumulator + item)

  return (
    <p>Number of exercises {total}</p>
  )
}

export { Total }