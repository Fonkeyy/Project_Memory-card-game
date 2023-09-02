// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '../css/StopWatch.css';
import { formatTime } from '../helpingFunctions';

const StopWatch = ({ isFetchDone, gameOver }) => {
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let stopWatch;

        if (isFetchDone) {
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
    }, [isFetchDone, elapsedTime, gameOver]);

    return (
        <div className="stopWatch">
            <p>{formatTime(elapsedTime)}</p>
        </div>
    );
};

StopWatch.propTypes = {
    isFetchDone: PropTypes.bool.isRequired,
    gameOver: PropTypes.func.isRequired,
};

export default StopWatch;
