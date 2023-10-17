import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import TimeCounter from './TimeCounter';

const ScoreContainer = ({ score, bestScore, bestTime, isGameOver }) => {
    const [height, setHeight] = useState(false);

    // * If window height < 850px setHeight(850)
    useEffect(() => {
        function handleResize() {
            if (window.innerHeight <= 850) {
                setHeight(850);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        // * When the game is started and height < 850px hide the score container
        <>
            {!isGameOver && height == 850 ? null : (
                <div className="score-container">
                    <Counter label="Score: " value={score} />
                    <Counter label="Best Score: " value={bestScore} />
                    <TimeCounter label="Best Time: " value={bestTime} />
                </div>
            )}
        </>
    );
};

ScoreContainer.propTypes = {
    score: PropTypes.number.isRequired,
    bestScore: PropTypes.number,
    bestTime: PropTypes.number.isRequired,
    isGameOver: PropTypes.bool.isRequired,
};

export default ScoreContainer;
