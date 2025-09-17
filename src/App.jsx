
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Tems from './Tems'
import User from './User'

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
      <Counter></Counter>
      <Tems></Tems>
      <User></User>
      <Friends></Friends>
      <button onClick={handleClick}>click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('button click3') }}>third</button>
      <button onClick={()=>addToFive(5)}>four</button>
    </>
  )
}

export default App
