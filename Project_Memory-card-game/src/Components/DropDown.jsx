// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

// // import '../css/DropDown.css';

const DropDown = ({ label, value }) => {
    return (
        <>
            <label>{label}</label> <p>{value}</p>
        </>
    );
};

DropDown.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

export default DropDown;
