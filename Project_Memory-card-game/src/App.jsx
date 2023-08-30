// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react';

import './App.css';
import './css/Card-container.css';
import CardContainer from './Components/CardContainer';
import Counter from './Components/Counter';
import DropDown from './Components/DropDown';

// todo => Add Title
// todo => Add choose weapon to play with
// todo => Add difficulty level (number of items displayed)
// todo => Fix why sometime there are duplicate cards
const pistolList = [
    'Desert Eagle',
    'Dual Berettas',
    'Five-SeveN',
    'Glock-18',
    'Tec-9',
    'P2000',
    'P250',
    'USP-S',
    'CZ75-Auto',
    'R8 Revolver',
];

const pmsList = ['M249', 'MAC10', 'P90', 'MPD5-SD', 'UMP-45', 'PP-Bizon', 'Negev', 'MP7', 'MP9'];

const rifleList = ['AK-47', 'AUG', 'FAMAS', 'Galil AR', 'M4A4', 'M4A1S', 'SG-553'];

const sniperList = ['AWP', 'G3SG1', 'SCAR-20', 'SSG08'];

const glovesList = [
    'Broken Fang Gloves',
    'Bloodhound Gloves',
    'Sport Gloves',
    'Driver Gloves',
    'Hand Wraps',
    'Moto Gloves',
    'Specialist Gloves',
    'Hydra Gloves',
];

const shotgunList = ['XM1014', 'MAG-7', 'Sawed-Off', 'Nova'];
const knifeList = [
    'Bayonet',
    'Flip Knife',
    'Gut Knife',
    'Karambit',
    'M9 Bayonet',
    'Huntsman Knife',
    'Falchion Knife',
    'Bowie Knife',
    'Butterfly Knife',
    'Shadow Daggers',
    'Paracord Knife',
    'Survival Knife',
    'Ursus Knife',
    'Navaja Knife',
    'Nomad Knife',
    'Stiletto Knife',
    'Talon Knife',
    'Skeleton Knife',
];

function App() {
    let [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

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

    return (
        <>
            <Counter label="Score" value={score} />
            <Counter label="Best Score" value={bestScore} />
            <DropDown label="Choose weapon" id="weapon" valueArr={dropDownWeaponArr} />
            <CardContainer
                cardNumberToRender={6}
                upScore={handleUpScore}
                gameOver={handleGameOver}
                isGameOver={isGameOver}
                bestScore={bestScore}
            />
        </>
    );
}

export default App;
