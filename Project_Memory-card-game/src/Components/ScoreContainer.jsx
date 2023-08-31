// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

// // import '../css/ScoreContainer.css';
import Counter from './Counter';

const ScoreContainer = ({ score, bestScore }) => {
    return (
        <div className="score-container">
            <Counter label="Score: " value={score} />
            <Counter label="Best Score: " value={bestScore} />
        </div>
    );
};

ScoreContainer.propTypes = {
    score: PropTypes.number.isRequired,
    bestScore: PropTypes.number.isRequired,
};

export default ScoreContainer;
