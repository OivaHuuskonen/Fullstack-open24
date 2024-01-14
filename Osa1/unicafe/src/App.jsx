import { useState } from "react"

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return (
  <p>No feedback given</p>
    )
  }

  const All = (good + bad + neutral)
  const Average = ((good + bad * -1 + neutral * 0) / (good + bad + neutral))
  const Positive = (good / (good + bad + neutral) + " %")

  return(
    <div>
    <StatisticLine text="Good" value={good} />
    <StatisticLine text="Bad" value={bad} />
    <StatisticLine text="Neutral" value={neutral} />
    <StatisticLine text="All" value={All} />
    <StatisticLine text="Average" value={Average} />
    <StatisticLine text="Positive" value={Positive} />
    </div>
  )
}

const StatisticLine = ({ text, value }) => (
  <table>
    <thead>
    <th>{text} </th>
    <th>{value}</th>
    </thead>
  </table>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
  )

const App =()=> {
const [good, setGood] = useState(0)
const [bad, setBad] = useState(0)
const [neutral, setNeutral] = useState(0)

  return (
    <div className = "unicafe">
    <h1>Unicafe gallup</h1>
    <Button handleClick={() => setGood(good + 1)} text="Good" />
    <Button handleClick={() => setBad(bad + 1)} text="Bad" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
    <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
