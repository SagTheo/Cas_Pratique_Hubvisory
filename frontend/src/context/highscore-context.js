import React, { useState } from 'react'

const HighscoreContext = React.createContext()

const HighscoreProvider = ({ children }) => {
    const [highscore, setHighscore] = useState(0)

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