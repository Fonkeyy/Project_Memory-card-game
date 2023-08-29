import React, { useState, useEffect } from 'react';

const Card = () => {
    const [AK47Data, setAK47Data] = useState([]);
    const [number, setNumber] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://bymykel.github.io/CSGO-API/api/en/skins.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                const AK47Skins = data.filter((skin) => skin.name.toLowerCase().includes('ak-47'));
                setAK47Data(AK47Skins);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const randomNumber = getRandomInt(0, AK47Data.length);

    return (
        <ul>
            {AK47Data[randomNumber] && (
                <li key={AK47Data[randomNumber].id}>
                    <h2>{AK47Data[randomNumber].name}</h2>
                    <img src={AK47Data[randomNumber].image} alt={AK47Data[randomNumber].name} />
                </li>
            )}
        </ul>
    );
};

export default Card;
