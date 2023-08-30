// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Card from './Card';

const CardContainer = ({ cardNumberToRender }) => {
    const [weaponData, setWeaponData] = useState([]);
    const [skinSet, setSkinSet] = useState(new Set());
    // const [shuffledArr, setShuffledArr] = useState(new Set(skinSet));

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
        if (weaponData.length > 0 && skinSet.size < cardNumberToRender) {
            const randomNumber = getRandomInt(0, weaponData.length);
            const randomSkin = weaponData[randomNumber];
            if (!skinSet.has(randomSkin)) {
                setSkinSet((previousSkinSet) => new Set([...previousSkinSet, randomSkin]));
            } else {
                return;
            }
        }
    }, [weaponData, skinSet, cardNumberToRender]);

    const handleCardClick = () => {
        const newShuffledArr = shuffleArr(skinSet);
        setSkinSet(newShuffledArr);
    };

    // * Helpers functions
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
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
                <Card key={skin.id} skin={skin} onClick={handleCardClick} />
            ))}
        </div>
    );
};

CardContainer.propTypes = {
    cardNumberToRender: PropTypes.number,
};

export default CardContainer;
