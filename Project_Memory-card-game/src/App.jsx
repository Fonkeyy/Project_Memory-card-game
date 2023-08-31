// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react';

import './App.css';
import './css/Card-container.css';
import CardContainer from './Components/CardContainer';
import DropDownContainer from './Components/DropDownContainer';
import ScoreContainer from './Components/ScoreContainer';
import Countdown from './Components/Countdown';

// todo => Add Timer
// todo => Add difficulty level (number of items displayed)
// todo => Fix why sometime there are duplicate cards or not 6 cards
// todo => Custom cursor?

function App() {
    let [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [weapon, setWeapon] = useState(null);

    const handleUpScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const handleGameOver = () => {
        handleSetBestScore();
        setScore(0);
        setIsGameOver(true);
        setIsGameStarted(false);
    };

    const handleSetBestScore = () => {
        setBestScore((prevBestScore) => Math.max(prevBestScore, score));
    };

    const handleSelectChange = (e) => {
        setWeapon(e);
        setIsGameStarted(true);
        setIsGameOver(false);
    };

    return (
        <>
            <h1>Memory Counter Skins</h1>
            <Countdown totalTime={60} isGameStarted={isGameStarted} isGameOver={isGameOver} />
            <ScoreContainer score={score} bestScore={bestScore} />
            <DropDownContainer selectedValueChange={handleSelectChange} />
            <CardContainer
                cardNumberToRender={6}
                upScore={handleUpScore}
                gameOver={handleGameOver}
                isGameStarted={isGameStarted}
                isGameOver={isGameOver}
                bestScore={bestScore}
                weaponSelected={weapon}
            />
        </>
    );
}

export default App;
