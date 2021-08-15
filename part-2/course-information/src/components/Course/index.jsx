import { Content } from '../Content'
import { Header } from '../Header'
import { Total } from '../Total'

const Course = ({ course }) => {
  const { name, parts } = course

  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export { Course }