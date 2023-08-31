// eslint-disable-next-line no-unused-vars
import React from 'react';

import PropTypes from 'prop-types';

import '../css/DropDown.css';

const DropDown = ({ id, weaponList, selectedValueChange }) => {
    const handleSelectChange = (e) => {
        selectedValueChange(e.target.value);
    };

    return (
        <div className="drop-down">
            <select id={id} onChange={handleSelectChange}>
                <option value="">{id}</option>
                {weaponList.map((element) => (
                    <option key={element} value={element}>
                        {element}
                    </option>
                ))}
            </select>
        </div>
    );
};

DropDown.propTypes = {
    id: PropTypes.string.isRequired,
    weaponList: PropTypes.array.isRequired,
    selectedValueChange: PropTypes.func.isRequired,
};

export default DropDown;
