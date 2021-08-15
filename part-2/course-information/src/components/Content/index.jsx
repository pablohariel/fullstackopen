const Part = ({ name = '', exercises = 0 }) => {
  return <p>{name} {exercises}</p>
}

const Content = ({ parts = [] }) => {
  return (
    <div>
      { parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />) }
    </div>
  )
}

export { Content }