import PropTypes from 'prop-types';
import '../css/DropDown.css';

const DropDown = ({ id, weaponList, selectedValueChange }) => {
    const handleSelectChange = (e) => {
        selectedValueChange(e.target.value);
    };

    return (
        <div className="drop-down">
            <label htmlFor={id} className="label_hide">
                {id}
            </label>
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
