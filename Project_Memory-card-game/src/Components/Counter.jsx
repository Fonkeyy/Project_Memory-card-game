// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../css/ScoreContainer.css';

const Counter = ({ label, value }) => {
    return (
        <div className="score-counter">
            <label>{label}</label> <p>{value}</p>
        </div>
    );
};

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

export default Counter;
