// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '../css/Card.css';

const Card = ({ skin }) => {
    return (
        <ul>
            {skin && (
                <li key={skin.id}>
                    <img src={skin.image} alt={skin.name} />
                    <h2>{skin.name}</h2>
                </li>
            )}
        </ul>
    );
};

Card.propTypes = {
    skin: PropTypes.object.isRequired,
};

export default Card;
