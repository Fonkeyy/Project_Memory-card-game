// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import './App.css';
import './css/Card-container.css';
import CardContainer from './Components/CardContainer';
import DropDownContainer from './Components/DropDownContainer';
import ScoreContainer from './Components/ScoreContainer';
import Countdown from './Components/Countdown';

// todo => Add difficulty level (number of items displayed)
// todo => undisplay dropdown when started

function App() {
    let [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(true);
    const [weapon, setWeapon] = useState(null);

    const handleUpScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const handleGameOver = () => {
        handleSetBestScore();
        setScore(0);
        setIsGameOver(true);
    };

    const handleSetBestScore = () => {
        setBestScore((prevBestScore) => Math.max(prevBestScore, score));
    };

    const handleSelectChange = (e) => {
        setWeapon(e);
        setIsGameOver(false);
    };

    return (
        <>
            <h1>Memory Counter Skins</h1>
            <Countdown totalTime={60} isGameOver={isGameOver} />
            <ScoreContainer score={score} bestScore={bestScore} />
            <DropDownContainer selectedValueChange={handleSelectChange} />
            <CardContainer
                cardNumberToRender={6}
                upScore={handleUpScore}
                gameOver={handleGameOver}
                isGameOver={isGameOver}
                bestScore={bestScore}
                weaponSelected={weapon}
            />
        </>
    );
}

export default App;
