// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import './App.css';
import './css/Card-container.css';
import CardContainer from './Components/CardContainer';
import DropDownContainer from './Components/DropDownContainer';
import ScoreContainer from './Components/ScoreContainer';
import StopWatch from './Components/StopWatch';

// todo => Add difficulty level (number of items displayed)

function App() {
    let [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    let [bestTime, setBestTime] = useState(Infinity);
    const [isGameOver, setIsGameOver] = useState(true);
    const [weapon, setWeapon] = useState(null);
    const [cardNumberToRender, setCardNumberToRender] = useState(6);

    useEffect(() => {
        if (score === cardNumberToRender) {
            setIsGameOver(true);
        }
    }, [score, isGameOver, cardNumberToRender]);

    const handleUpScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const handleGameOver = (time) => {
        handleSetBestTime(time);
        handleSetBestScore();
        setScore(0);
        setIsGameOver(true);
    };

    const handleSetBestScore = () => {
        setBestScore((prevBestScore) => Math.max(prevBestScore, score));
    };

    useEffect(() => {
        console.log('Best Time updated:', bestTime);
    }, [bestTime]);

    const handleSetBestTime = (time) => {
        if (time < bestTime) {
            setBestTime(time);
        }
    };

    const handleSelectChange = (e) => {
        setWeapon(e);
        setIsGameOver(false);
    };

    return (
        <>
            <h1>Memory Counter Skins</h1>
            <StopWatch isGameOver={isGameOver} gameOver={handleGameOver} />
            <ScoreContainer score={score} bestScore={bestScore} bestTime={bestTime} />
            <DropDownContainer selectedValueChange={handleSelectChange} isGameOver={isGameOver} />
            <CardContainer
                cardNumberToRender={cardNumberToRender}
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
