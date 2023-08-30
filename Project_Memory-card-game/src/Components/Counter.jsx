// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

// // import '../css/Counter.css';

const Counter = ({ label, value }) => {
    return (
        <>
            <label>{label}</label> <p>{value}</p>
        </>
    );
};

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

export default Counter;
