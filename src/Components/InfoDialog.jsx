import { useState } from 'react';
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
        <>
            {!isOpen && (
                <button id="info-dialog-btn" aria-label="infos how to play" onClick={openDialog}></button>
            )}

            {isOpen && (
                <dialog id="info-dialog" open>
                    <p>Try to click on each cards no more than once, the faster you can...</p>
                    <button id="close-svg" onClick={closeDialog}>
                        Let&lsquo;s go
                    </button>
                </dialog>
            )}
        </>
    );
};

export default InfoDialog;
