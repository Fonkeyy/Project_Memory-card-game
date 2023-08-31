// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DropDown from './DropDown';

import '../css/DropDown.css';

import { pistolList, smgList, rifleList, sniperList, shotgunList, glovesList, knifeList } from '../data';

const DropDownContainer = ({ selectedValueChange, isGameOver }) => {
    const handleSelectChange = (e) => {
        selectedValueChange(e);
    };

    return (
        <>
            {isGameOver ? (
                <div className="drop-down-container">
                    <div className="label-container">
                        <label>Choose weapon</label>
                    </div>
                    <DropDown id="Knifes" weaponList={knifeList} selectedValueChange={handleSelectChange} />
                    <DropDown id="Pistols" weaponList={pistolList} selectedValueChange={handleSelectChange} />
                    <DropDown id="SMGs" weaponList={smgList} selectedValueChange={handleSelectChange} />
                    <DropDown id="Rifles" weaponList={rifleList} selectedValueChange={handleSelectChange} />
                    <DropDown id="Snipers" weaponList={sniperList} selectedValueChange={handleSelectChange} />
                    <DropDown
                        id="Shotguns"
                        weaponList={shotgunList}
                        selectedValueChange={handleSelectChange}
                    />
                    <DropDown id="Gloves" weaponList={glovesList} selectedValueChange={handleSelectChange} />
                </div>
            ) : null}
        </>
    );
};

DropDownContainer.propTypes = {
    selectedValueChange: PropTypes.func.isRequired,
    isGameOver: PropTypes.bool.isRequired,
};

export default DropDownContainer;
