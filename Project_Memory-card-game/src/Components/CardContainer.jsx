// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Card from './Card';

const CardContainer = ({ cardNumberToRender, upScore, gameOver, isGameOver, bestScore }) => {
    const [weaponData, setWeaponData] = useState([]);
    const [skinSet, setSkinSet] = useState(new Set());
    const [shouldResetSkinSet, setShouldResetSkinSet] = useState(false);

    useEffect(() => {
        if (isGameOver === true || bestScore > 0) {
            setShouldResetSkinSet(true);
        }
    }, [isGameOver, bestScore]);

    // * Fetch data from the API and set it to weaponData
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://bymykel.github.io/CSGO-API/api/en/skins.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                const weaponSkins = data.filter((skin) => skin.name.toLowerCase().includes('ak-47'));
                setWeaponData(weaponSkins);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);

    // * Randomly select skins in weaponData and set it to skinSet
    useEffect(() => {
        if (shouldResetSkinSet) {
            setSkinSet(new Set());
            setShouldResetSkinSet(false);
        } else if (weaponData.length > 0 && skinSet.size < cardNumberToRender) {
            const randomNumber = getRandomInt(0, weaponData.length);
            const randomSkin = weaponData[randomNumber];

            setSkinSet((previousSkinSet) => {
                if (!previousSkinSet.has(randomSkin)) {
                    return new Set([...previousSkinSet, randomSkin]);
                } else {
                    return previousSkinSet;
                }
            });
        }
    }, [weaponData, skinSet, cardNumberToRender, shouldResetSkinSet]);

    const handleCardClick = () => {
        const newShuffledArr = shuffleArr(skinSet);
        setSkinSet(newShuffledArr);
        upScore();
    };

    // * Helpers functions
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const shuffleArr = (arr) => {
        const shuffledArray = [...arr];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    return (
        <div id="card-container">
            {Array.from(skinSet).map((skin) => (
                <Card key={skin.id} skin={skin} onClick={handleCardClick} gameOver={gameOver} />
            ))}
        </div>
    );
};

CardContainer.propTypes = {
    cardNumberToRender: PropTypes.number,
    upScore: PropTypes.func,
    gameOver: PropTypes.func,
    isGameOver: PropTypes.bool,
    bestScore: PropTypes.number,
};

export default CardContainer;
