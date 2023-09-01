// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../css/InfoDialog.css';

const InfoDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {!isOpen && <button id="info-dialog-btn" onClick={openDialog}></button>}

            {isOpen && (
                <dialog id="info-dialog" open>
                    <p>Try to click on each cards no more than once, the faster you can...</p>
                    <button id="close-svg" onClick={closeDialog}>
                        Let's go
                    </button>
                </dialog>
            )}
        </div>
    );
};

export default InfoDialog;
