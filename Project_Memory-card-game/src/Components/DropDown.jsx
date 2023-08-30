// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

// // import '../css/DropDown.css';

const DropDown = ({ label, id, weaponList, selectedValueChange }) => {
    const handleSelectChange = (e) => {
        selectedValueChange(e.target.value);
    };

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id} onChange={handleSelectChange}>
                <option value="">{id}</option>
                {weaponList.map((element) => (
                    <option key={element} value={element}>
                        {element}
                    </option>
                ))}
            </select>
        </>
    );
};

DropDown.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    weaponList: PropTypes.array.isRequired,
    selectedValueChange: PropTypes.func.isRequired,
};

export default DropDown;
