import { useState } from 'react';
import '../css/InfoDialog.css';

const InfoDialog = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <button
                id="info-dialog-btn"
                aria-label="rules of the game"
                onClick={() => setIsOpen(!isOpen)}></button>
            {isOpen && (
                <dialog id="info-dialog" open>
                    <p>
                        Welcome to Memory Counter Skins, the ultimate test of your memory and speed!<br></br>
                        In this game, your mission is to click on a unique skin with lightning speed, but
                        beware, a single repeat click and it&lsquo;s game over! <br></br>Are you up for the
                        challenge? Good luck!
                    </p>

                    <button id="close-dialog" onClick={() => setIsOpen(!isOpen)}>
                        Let&lsquo;s go
                    </button>
                </dialog>
            )}
        </>
    );
};

export default InfoDialog;
