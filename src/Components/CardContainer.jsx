import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { API_URL } from '../data';
import { getRandomInt, shuffleArr } from '../helpingFunctions';

const CardContainer = ({ cardNumberToRender, upScore, gameOver, isGameOver, weaponSelected, fetchDone }) => {
    const [weaponData, setWeaponData] = useState([]);
    const [skinSet, setSkinSet] = useState(new Set());

    useEffect(() => {
        const clearSkinSet = () => setSkinSet(new Set());

        if (isGameOver) {
            clearSkinSet();
        } else {
            const fetchData = async () => {
                try {
                    const response = await fetch(API_URL);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    if (weaponSelected) {
                        const weaponSkins = data.filter((skin) =>
                            skin.name.toLowerCase().includes(weaponSelected.toLowerCase())
                        );
                        setWeaponData(weaponSkins);
                        clearSkinSet();
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                    alert('Apologize, an error occurred, please try again');
                }
            };

            fetchData();
        }
    }, [weaponSelected, isGameOver]);

    // * Randomly select skins in weaponData and set it to skinSet
    useEffect(() => {
        const addRandomSkins = () => {
            if (weaponData.length > 0 && skinSet.size < cardNumberToRender) {
                const skinsToAdd = new Set();
                while (skinsToAdd.size < cardNumberToRender - skinSet.size) {
                    const randomNumber = getRandomInt(0, weaponData.length);
                    const randomSkin = weaponData[randomNumber];
                    if (randomSkin !== undefined) {
                        skinsToAdd.add(randomSkin);
                    }
                }
                setSkinSet((previousSkinSet) => new Set([...previousSkinSet, ...skinsToAdd]));
            }
        };
        addRandomSkins();
    }, [weaponData, skinSet, cardNumberToRender]);

    useEffect(() => {
        if (skinSet.size === cardNumberToRender) {
            fetchDone();
        }
    }, [skinSet, cardNumberToRender, fetchDone]);

    const handleCardClick = () => {
        const newShuffledArr = shuffleArr([...skinSet]);
        setSkinSet(newShuffledArr);
        upScore();
    };

    return (
        !isGameOver && (
            <>
                <ul id="card-container">
                    {[...skinSet].map(
                        (skin) =>
                            skin && (
                                <Card
                                    key={skin.id}
                                    skin={skin}
                                    onClick={handleCardClick}
                                    gameOver={gameOver}
                                />
                            )
                    )}
                </ul>
            </>
        )
    );
};
CardContainer.propTypes = {
    cardNumberToRender: PropTypes.number,
    upScore: PropTypes.func,
    gameOver: PropTypes.func,
    isGameOver: PropTypes.bool,
    weaponSelected: PropTypes.string,
    fetchDone: PropTypes.func,
};

export default CardContainer;
