// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '../css/Card.css';

const Card = ({ skin, onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleOnClick = () => {
        if (isClicked) {
            alert('Game Over');
        } else {
            setIsClicked(true);
            onClick();
        }
    };
    return (
        <ul>
            {skin && (
                <li key={skin.id} onClick={handleOnClick}>
                    <img src={skin.image} alt={skin.name} />
                    <h2>{skin.name}</h2>
                </li>
            )}
        </ul>
    );
};

Card.propTypes = {
    skin: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;
