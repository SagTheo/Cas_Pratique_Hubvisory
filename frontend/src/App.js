import './App.css';
import Welcome from './screen/Welcome';
import Quizz from './screen/Quizz';
import GameOver from './screen/GameOver';
import NotFound from './screen/NotFound'
import { Routes, Route } from 'react-router-dom'
import { HighscoreProvider } from './context/highscore-context'
import { GameOverContext } from './context/gameOver-context'
import { useContext } from 'react';

function App() {
  const gameOver = useContext(GameOverContext)

  return (
    <div className="App">
      <HighscoreProvider>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/quizz' element={<Quizz />} />
          {/* Makes accessibility to /game_over route dependent on the gameOver global state */}
          { gameOver.gameOver && <Route path='/game_over' element={<GameOver />} /> } 
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HighscoreProvider>
    </div>
  );
}

export default App;
