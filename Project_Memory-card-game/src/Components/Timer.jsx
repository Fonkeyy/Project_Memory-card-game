// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '../css/Timer.css';

const Timer = ({ totalTime, isGameOver }) => {
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

    return (
        <div className="timer">
            {isGameOver ? (
                <p>
                    Timer: <span>{totalTime}</span>
                </p>
            ) : (
                <p>
                    Timer: <span>{time}</span>
                </p>
            )}
        </div>
    );
};

Timer.propTypes = {
    totalTime: PropTypes.number.isRequired,
    isGameOver: PropTypes.bool.isRequired,
};

export default Timer;
