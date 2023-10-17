import { useState } from 'react';
import PropTypes from 'prop-types';

import '../css/InfoDialog.css';

const InfoDialog = ({ isGameOver }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {isGameOver ? (
                <>
                    {!isOpen && <button id="info-dialog-btn" onClick={openDialog}></button>}

                    {isOpen && (
                        <dialog id="info-dialog" open>
                            <p>Try to click on each cards no more than once, the faster you can...</p>
                            <button id="close-svg" onClick={closeDialog}>
                                Let&lsquo;s go
                            </button>
                        </dialog>
                    )}
                </>
            ) : null}
        </div>
    );
};

InfoDialog.propTypes = {
    isGameOver: PropTypes.bool.isRequired,
};

export default InfoDialog;
