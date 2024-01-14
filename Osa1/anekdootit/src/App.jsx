import { useState } from 'react'

const App =()=> {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
 
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(8))
  const [mostVoted, setMostVoted] = useState(0);

  const handleSetSelected =()=> { 
  setSelected(Math.floor(Math.random() * 8))
  }

  const handleVote =()=> { 
    const copy = [ ...points ]
    copy [selected] += 1;
    if(copy[selected] > copy[mostVoted]) { 
       setMostVoted(selected);
    }  
    setPoints(copy);
  }

  return (
  <div className="App">
  <h1>The day's programming anecdote is: </h1>
  <div>{anecdotes[selected]}</div>
  <br></br>
  <div className="butt">
  <button onClick = {handleSetSelected}>next</button>
  <button onClick = {handleVote}>vote</button>
  </div>
  <br></br>
  most voted anecdote is: 
  <div>{anecdotes[mostVoted]}</div>
  </div>
  )
}

export default App
