// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '../css/StopWatch.css';
import { formatTime } from '../helpingFunctions';

const StopWatch = ({ isGameOver, gameOver }) => {
    const [elapsedTime, setElapsedTime] = useState(0);
    console.log(elapsedTime);
    useEffect(() => {
        let stopWatch;

        if (!isGameOver) {
            stopWatch = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
            }, 10);
        } else {
            setElapsedTime(0);
            clearInterval(stopWatch);
            if (elapsedTime > 0) {
                gameOver(elapsedTime);
            }
        }

        return () => {
            clearInterval(stopWatch);
        };
    }, [isGameOver, elapsedTime, gameOver]);

    return (
        <div className="stopWatch">
            <p>{formatTime(elapsedTime)}</p>
        </div>
    );
};

StopWatch.propTypes = {
    isGameOver: PropTypes.bool.isRequired,
    gameOver: PropTypes.func.isRequired,
};

export default StopWatch;
