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
    // const [currentTime, setCurrentTime] = useState(0);
    const [bestTime, setBestTime] = useState(0);
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
        // setCurrentTime(Number(formattedTime));
        handleSetBestTime(time);
        handleSetBestScore();
        // setCurrentTime(0);
        setScore(0);
        setIsGameOver(true);
    };

    const handleSetBestScore = () => {
        setBestScore((prevBestScore) => Math.max(prevBestScore, score));
    };

    const handleSetBestTime = (time) => {
        setBestTime((prevBestTime) => {
            console.log(prevBestTime);
            console.log(typeof time);
            const newBestTime = prevBestTime !== undefined ? prevBestTime : 0;
            return Math.max(newBestTime, time);
        });
    };

    const handleSelectChange = (e) => {
        setWeapon(e);
        setIsGameOver(false);
    };

    console.log(bestTime);

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
