// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Card from './Card';

const CardContainer = ({ cardNumberToRender }) => {
    // todo => Make sure all Cards are different

    const [weaponData, setWeaponData] = useState([]);
    const [skinSet, setSkinSet] = useState(new Set());

    // * Fetch data to the API and set it to weaponData
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

    // ! See how to add to set
    while (skinSet.length < 6) {
        const randomNumber = getRandomInt(0, weaponData.length);
        const randomSkin = weaponData[randomNumber];
        console.log(randomNumber);
        console.log(randomSkin);
        setSkinSet((previousSkinSet) => {
            [...previousSkinSet, randomSkin];
        });
    }
    console.log(skinSet);

    return (
        <div id="card-container">
            {skinSet.map((skin) => {
                <Card skin={skin} />;
            })}
            ;
        </div>
    );
};

CardContainer.propTypes = {
    cardNumberToRender: PropTypes.number,
};

export default CardContainer;
