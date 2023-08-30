// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react';

import './App.css';
import './css/Card-container.css';
import CardContainer from './Components/CardContainer';
import Counter from './Components/Counter';
import DropDownContainer from './Components/DropDownContainer';

// todo => Add Title
// todo => Add choose weapon to play with
// todo => Add difficulty level (number of items displayed)
// todo => Fix why sometime there are duplicate cards or not 6 cards

function App() {
    let [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
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
        console.log(e);
        setWeapon(e);
    };

    return (
        <>
            <Counter label="Score" value={score} />
            <Counter label="Best Score" value={bestScore} />
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
