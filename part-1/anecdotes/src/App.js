import { useEffect, useState } from "react";

function App() {
  const anecdotesData = [
    {
      text: 'The best way to get a project done faster is to start sooner.',
      votes: 0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      text: 'Even the best planning is not so omniscient as to get it right the first time.',
      votes: 0
    },
    {
      text: 'How does a project get to be a year late?... One day at a time.',
      votes: 0
    },
    {
      text: 'Every good work of software starts by scratching a developer\'s personal itch',
      votes: 0
    },
  ]

  const [anecdotes, setAnecdotes] = useState(anecdotesData)
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState()

  useEffect(() => {
    const getMostVoted = () => {
      for(let item of anecdotes) {
        let isBigger = true
        
        for(let item2 of anecdotes) {
          if(item.votes < item2.votes) {
            isBigger = false
          }
        }
        if(item.votes < 1) {
          isBigger = false
        }
        if(isBigger) {
          setMostVoted(item)
        }
      }
    }
    getMostVoted()
  }, [anecdotes])

  const handleNext = () => {
    let result 

    do {
      result = Math.floor(Math.random() * anecdotes.length)
    } while(result === selected)
    
    setSelected(result)
  }

  const handleVote = () => {
    const anecdotesUpdate = [...anecdotes]

    anecdotesUpdate[selected].votes++

    setAnecdotes(anecdotesUpdate)
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected].text}</p>
        <p style={{ margin: '0px' }}>Votes: {anecdotes[selected].votes}</p>

        <div style={{ width: '134px', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button onClick={handleVote}>vote</button>
          <button onClick={handleNext}>next anecdote</button>
        </div>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{mostVoted ? mostVoted.text : 'no votes'}</p>
      </div>
    </div>
  );
}

export default App;
