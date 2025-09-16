
import './App.css'

function handleClick (){
  alert('button click')
}

function App() {

  return (
    <>
    <h3>React core concepts </h3>
    <button onClick={handleClick}>click Me</button>
    </>
  )
}

export default App
