// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

// // import '../css/DropDown.css';

const DropDown = ({ label, id, valueArr }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={label}>
                {valueArr.map((element) => (
                    <option key={element} value={element}>
                        {element}
                    </option>
                ))}
                ;
            </select>
        </>
    );
};

DropDown.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    valueArr: PropTypes.array.isRequired,
};

export default DropDown;
