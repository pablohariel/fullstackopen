const Total = ({ parts = [] }) => {
  const total = parts.map(part => part.exercises).reduce((accumulator, item) => accumulator + item)

  return (
    <strong>total of {total} exercises</strong>
  )
}

export { Total }