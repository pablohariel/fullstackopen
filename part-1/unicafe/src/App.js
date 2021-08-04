import React, { useEffect, useState } from 'react'

import { Statistics } from './components/Statistics'
import { Button } from './components/Button'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const totalCalc = good + neutral + bad
    const averageCalc = (good - bad) / totalCalc
    const percentageCalc = (good / totalCalc) * 100

    if(averageCalc) setAverage(averageCalc)
    if(percentageCalc) setPercentage(percentageCalc)
    
    setTotal(totalCalc)
  }, [good, neutral, bad])

  const handleGoodBtn = () => {
    setGood(good + 1)
  }

  const handleNeutralBtn = () => {
    setNeutral(neutral + 1)
  }

  const handleBadBtn = () => {
    setBad(bad + 1)
  }

  return (
    <div className="App">
      <div>
        <h1>give feedback</h1>

        <Button onClick={handleGoodBtn} text='good' />
        <Button onClick={handleNeutralBtn} text='neutral' />
        <Button onClick={handleBadBtn} text='bad' />
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} percentage={percentage} />
      </div>
    </div>
  );
}

export default App;
