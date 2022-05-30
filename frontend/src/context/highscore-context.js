import React, { useState } from 'react'

const HighscoreContext = React.createContext()

const HighscoreProvider = ({ children }) => {
    // const [highscore, setHighscore] = useState(0)
    //To maintain highscore between games of different sessions
    const [highscore, setHighscore] = useState(localStorage.getItem('highscore') ?? 0)

    return (
        <HighscoreContext.Provider value={{
            highscore,
            updateHighscore: (newHighscore) => setHighscore(newHighscore)
        }}>
            {children}
        </HighscoreContext.Provider>
    )
}

export { HighscoreContext, HighscoreProvider }