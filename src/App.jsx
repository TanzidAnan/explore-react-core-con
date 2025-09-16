
import './App.css'

function handleClick() {
  alert('button click')
}

const handleClick2 = () => {
  alert('button click 2')
}

const addToFive = (num) => {
  alert(num + 5)

}

function App() {

  return (
    <>
      <h3>React core concepts </h3>
      <button onClick={handleClick}>click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('button click3') }}>third</button>
      <button onClick={()=>addToFive(5)}>four</button>
    </>
  )
}

export default App
