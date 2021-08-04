import { StatisticLine } from '../StatisticLine'

const Statistics = ({ good, neutral, bad, total, average, percentage }) => {
  return (
    <>
      <h1>Statistics</h1>
      {total > 0 ? 
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='total' value={total} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='percentage' value={percentage} />
          </tbody>
        </table>
        :
        <p>No feedback given</p>
      }
    </>
  )
}

export { Statistics }