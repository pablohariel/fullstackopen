import { Content } from './components/Content'
import { Header } from './components/Header'
import { Total } from './components/Total'

function App() {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }

  const { name, parts } = course

  return (
    <div className="App">
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
