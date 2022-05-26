import './App.css';
import Welcome from './screen/Welcome';
import Quizz from './screen/Quizz';
import GameOver from './screen/GameOver';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='quizz' element={<Quizz />} />
        <Route path='game_over' element={<GameOver />} />
      </Routes>
    </div>
  );
}

export default App;
