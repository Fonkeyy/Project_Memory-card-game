import PropTypes from 'prop-types';
import '../css/ScoreContainer.css';

const Counter = ({ label, value }) => {
    return (
        <div className="score-counter">
            <label>{label}</label> <p>{value}</p>
        </div>
    );
};

Counter.propTypes = {
    value: PropTypes.number,
    label: PropTypes.string,
};

export default Counter;
