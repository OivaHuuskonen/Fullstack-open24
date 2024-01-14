import React from 'react'

const Part = (props) => {
  return (
    <div>
    <Part part1={props.Part1 + props.exercises1} />
    <Part part2={props.Part2 + props.exercises2} />
    <Part part3={props.Part3 + props.exercises3} />
    </div>
  )
}


const Header = (props) => {
  return (
    <div>
    <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
    <Part part1={props.Part1 + props.exercises1} />
    <Part part2={props.Part2 + props.exercises2} />
    <Part part3={props.Part3 + props.exercises3} />
    </div>
  )
}

 const Total = (props) => {
  return (
    <div>
      <p>Total sum is {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}


const App = () => {
  const course='Half Stack application development'
  const Part1='Fundamentals of React'
  const exercises1=10
  const Part2='Using props to pass data'
  const exercises2=7
  const Part3='State of a component'
  const exercises3=14
 
  return (
    <div className="App">
      <div className='content'>
      <h1>Course information</h1>
      <Header course={course} />
      <Content Part1={Part1} exercises1={exercises1} Part2={Part2} exercises2={exercises2} Part3={Part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      </div>
    </div>
  )
}

export default App
