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
            <DropDown
                label="Choose weapon: "
                id="Pistols"
                weaponList={pistolList}
                selectedValueChange={handleSelectChange}
            />
            <DropDown label="" id="SMGs" weaponList={smgList} selectedValueChange={handleSelectChange} />
            <DropDown label="" id="Rifles" weaponList={rifleList} selectedValueChange={handleSelectChange} />
            <DropDown
                label=""
                id="Snipers"
                weaponList={sniperList}
                selectedValueChange={handleSelectChange}
            />
            <DropDown
                label=""
                id="Shotguns"
                weaponList={shotgunList}
                selectedValueChange={handleSelectChange}
            />
            <DropDown label="" id="Gloves" weaponList={glovesList} selectedValueChange={handleSelectChange} />
            <DropDown label="" id="Knifes" weaponList={knifeList} selectedValueChange={handleSelectChange} />
        </>
    );
};

DropDownContainer.propTypes = {
    selectedValueChange: PropTypes.func.isRequired,
};

export default DropDownContainer;
