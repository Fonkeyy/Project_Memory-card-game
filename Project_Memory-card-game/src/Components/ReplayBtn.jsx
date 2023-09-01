// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import '../css/ReplayBtn.css';

const ReplayBtn = ({ replay }) => {
    return (
        <button id="replay-btn" onClick={replay}>
            Replay
        </button>
    );
};

ReplayBtn.propTypes = {
    replay: PropTypes.func.isRequired,
};

export default ReplayBtn;
