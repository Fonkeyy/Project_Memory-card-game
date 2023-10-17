import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatTime } from '../helpingFunctions';
import '../css/StopWatch.css';

const StopWatch = ({ isFetchDone, isGameOver, gameOver }) => {
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let stopWatch;

        if (isFetchDone) {
            stopWatch = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
            }, 10);
        }
        if (isGameOver) {
            setElapsedTime(0);
            clearInterval(stopWatch);
            if (elapsedTime > 0) {
                gameOver(elapsedTime);
            }
        }

        return () => {
            clearInterval(stopWatch);
        };
    }, [isFetchDone, elapsedTime, isGameOver, gameOver]);

    return <div className="stop-watch">{!isGameOver && <p>{formatTime(elapsedTime)}</p>}</div>;
};

StopWatch.propTypes = {
    isFetchDone: PropTypes.bool.isRequired,
    isGameOver: PropTypes.bool.isRequired,
    gameOver: PropTypes.func.isRequired,
};

export default StopWatch;
