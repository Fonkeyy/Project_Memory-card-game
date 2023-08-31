// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

// // import '../css/Countdown.css';

const Countdown = ({ totalTime, isGameOver }) => {
    const [time, setTime] = useState(totalTime);

    useEffect(() => {
        if (!isGameOver) {
            const intervalId = setInterval(() => {
                setTime((previousTime) => previousTime - 1);
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [setTime, isGameOver]);

    useEffect(() => {
        if (isGameOver) {
            setTime(totalTime);
        }
    }, [isGameOver, totalTime]);

    return <>{isGameOver ? <p>Countdown: {totalTime}</p> : <p>Countdown: {time}</p>}</>;
};

Countdown.propTypes = {
    totalTime: PropTypes.number.isRequired,
    isGameOver: PropTypes.bool.isRequired,
};

export default Countdown;
