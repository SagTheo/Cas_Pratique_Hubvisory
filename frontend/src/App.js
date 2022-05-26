import './App.css';
import Welcome from './screen/Welcome';
import Quizz from './screen/Quizz';
import GameOver from './screen/GameOver';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  // const [testQuestion, setTestQuestion] = useState('')

  useEffect(() => {  
    // fetch('http://localhost:3001/testQuestion')
    //   .then(res => res.json())
    //   .then(data => setTestQuestion(data.response))
    //   .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='quizz' element={<Quizz />} />
        <Route path='game_over' element={<GameOver />} />
      </Routes>
      
      {/* <p>{testQuestion}</p> */}
    </div>
  );
}

export default App;
