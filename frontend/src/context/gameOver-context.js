import React, { useState } from 'react'

const GameOverContext = React.createContext()

const GameOverProvider = ({ children }) => {
    const [gameOver, setGameOver] = useState(false)

    return (
        <GameOverContext.Provider value={{
            gameOver,
            updateGameOver: () => setGameOver(!gameOver)
        }}>
            {children}
        </GameOverContext.Provider>
    )
}

export { GameOverContext, GameOverProvider }