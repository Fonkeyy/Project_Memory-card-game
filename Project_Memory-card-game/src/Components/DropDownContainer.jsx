// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import DropDown from './DropDown';

import { pistolList, smgList, rifleList, sniperList, shotgunList, glovesList, knifeList } from '../data';

// // import '../css/DropDownContainer.css';

const DropDownContainer = ({ selectedValueChange }) => {
    const handleSelectChange = (e) => {
        selectedValueChange(e);
    };

    return (
        <>
            <label>Choose weapon: </label>
            <DropDown id="Pistols" weaponList={pistolList} selectedValueChange={handleSelectChange} />
            <DropDown id="SMGs" weaponList={smgList} selectedValueChange={handleSelectChange} />
            <DropDown id="Rifles" weaponList={rifleList} selectedValueChange={handleSelectChange} />
            <DropDown id="Snipers" weaponList={sniperList} selectedValueChange={handleSelectChange} />
            <DropDown id="Shotguns" weaponList={shotgunList} selectedValueChange={handleSelectChange} />
            <DropDown id="Gloves" weaponList={glovesList} selectedValueChange={handleSelectChange} />
            <DropDown id="Knifes" weaponList={knifeList} selectedValueChange={handleSelectChange} />
        </>
    );
};

DropDownContainer.propTypes = {
    selectedValueChange: PropTypes.func.isRequired,
};

export default DropDownContainer;
