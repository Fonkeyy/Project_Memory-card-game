// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

// // import '../css/Countdown.css';

const Countdown = ({ totalTime, isGameStarted, isGameOver }) => {
    const [time, setTime] = useState(totalTime);

    useEffect(() => {
        if (isGameStarted) {
            const intervalId = setInterval(() => {
                setTime((previousTime) => previousTime - 1);
            }, 1000);
            if (isGameOver) {
                clearInterval(intervalId);
            }

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [isGameStarted, setTime, isGameOver]);

    useEffect(() => {
        if (isGameOver) {
            setTime(totalTime);
        }
    }, [isGameOver, totalTime]);

    return <>{isGameStarted ? <p>Countdown: {time}</p> : <p>Countdown: {totalTime}</p>}</>;
};

Countdown.propTypes = {
    totalTime: PropTypes.number.isRequired,
    isGameStarted: PropTypes.bool.isRequired,
    isGameOver: PropTypes.bool.isRequired,
};

export default Countdown;
