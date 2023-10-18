import { useState } from 'react';
import PropTypes from 'prop-types';

import '../css/Card.css';

const Card = ({ skin, onClick, gameOver }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleOnClick = () => {
        if (isClicked) {
            gameOver();
        } else {
            setIsClicked(true);
            onClick();
        }
    };

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleOnClick();
        }
    };
    return (
        <>
            {skin && (
                <li
                    tabIndex={0}
                    key={skin.id}
                    className="card-item"
                    onClick={handleOnClick}
                    onKeyDown={handleOnKeyDown}>
                    <img src={skin.image} alt={skin.name} />
                    <h2>{skin.name}</h2>
                </li>
            )}
        </>
    );
};

Card.propTypes = {
    skin: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    gameOver: PropTypes.func,
};

export default Card;
