// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import '../css/ScoreContainer.css';
import { formatTime } from '../helpingFunctions';

const Counter = ({ label, value }) => {
    return (
        <div className="score-counter">
            {value !== Infinity ? (
                <>
                    <label>{label}</label> <p>{formatTime(value)}</p>
                </>
            ) : (
                <>
                    <label>{label}</label> <p>00.00</p>
                </>
            )}
        </div>
    );
};

Counter.propTypes = {
    value: PropTypes.number,
    label: PropTypes.string,
};

export default Counter;
