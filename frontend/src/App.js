import './App.css';
import Welcome from './screen/Welcome';
import Quizz from './screen/Quizz';
import GameOver from './screen/GameOver';
import NotFound from './screen/NotFound'
import { Routes, Route } from 'react-router-dom'
import { HighscoreProvider } from './context/highscore-context'

function App() {
  return (
    <div className="App">
      <HighscoreProvider>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='quizz' element={<Quizz />} />
          <Route path='game_over' element={<GameOver />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HighscoreProvider>
    </div>
  );
}

export default App;
