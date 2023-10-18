import PropTypes from 'prop-types';
import { formatTime } from '../helpingFunctions';
import '../css/ScoreContainer.css';

const Counter = ({ label, value }) => {
    return (
        <div className="score-counter">
            {value !== Infinity ? (
                <>
                    <p>{label}</p> <p>{formatTime(value)}</p>
                </>
            ) : (
                <>
                    <p>{label}</p> <p>00.00</p>
                </>
            )}
        </div>
    );
};

Counter.propTypes = {
    value: PropTypes.number,
    label: PropTypes.string,
};

export default Counter;
