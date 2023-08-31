// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '../css/StopWatch.css';

const StopWatch = ({ isGameOver }) => {
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let stopWatch;

        if (!isGameOver) {
            stopWatch = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
            }, 10);
        } else {
            clearInterval(stopWatch);
        }

        return () => {
            clearInterval(stopWatch);
        };
    }, [isGameOver]);

    const formatTime = (time) => {
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;
        return `${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
    };

    return (
        <div className="stopWatch">
            <p>{formatTime(elapsedTime)}</p>
        </div>
    );
};

StopWatch.propTypes = {
    isGameOver: PropTypes.bool.isRequired,
};

export default StopWatch;
