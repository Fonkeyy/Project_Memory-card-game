// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

// // import '../css/ScoreContainer.css';
import Counter from './Counter';
import TimeCounter from './TimeCounter';

const ScoreContainer = ({ score, bestScore, bestTime }) => {
    return (
        <div className="score-container">
            <Counter label="Score: " value={score} />
            <Counter label="Best Score: " value={bestScore} />
            <TimeCounter label="Best Time: " value={bestTime} />
        </div>
    );
};

ScoreContainer.propTypes = {
    score: PropTypes.number.isRequired,
    bestScore: PropTypes.number,
    bestTime: PropTypes.number.isRequired,
};

export default ScoreContainer;
