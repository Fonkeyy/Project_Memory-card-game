// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import './App.css';
import './css/Card-container.css';
import CardContainer from './Components/CardContainer';
import Counter from './Components/Counter';

// todo => Add Title
// todo => Add Scoreboard
// todo => Add choose weapon to play with
// todo => Add difficulty level (number of items displayed)
function App() {
    let [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const handleUpScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const handleGameOver = () => {
        setBestScore(score);
        setScore(0);
    };
    return (
        <>
            <Counter label="Score" value={score} />
            <Counter label="Best Score" value={bestScore} />
            <CardContainer cardNumberToRender={6} upScore={handleUpScore} gameOver={handleGameOver} />
        </>
    );
}

export default App;
