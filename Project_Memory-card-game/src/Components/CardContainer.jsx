// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Card from './Card';

const CardContainer = ({ cardNumberToRender }) => {
    const [weaponData, setWeaponData] = useState([]);
    const [skinSet, setSkinSet] = useState(new Set());

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

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

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

    return (
        // * For each skin in skinSet create a Card with the skin passed to the props
        <div id="card-container">
            {Array.from(skinSet).map((skin, index) => {
                return <Card key={index} skin={skin} />;
            })}
            ;
        </div>
    );
};

CardContainer.propTypes = {
    cardNumberToRender: PropTypes.number,
};

export default CardContainer;
