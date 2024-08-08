import { useState } from 'react'
// import Header from './component/Header/Header'
// import Home from './component/Home/Home'
// import Footer from './component/Footer/Footer'
import ExerciseShow from './component/Exercise/ExerciseShow'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ExerciseShow/>
    </>
  )
}

export default App
