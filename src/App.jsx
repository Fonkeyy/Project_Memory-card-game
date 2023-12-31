import { useEffect, useState } from 'react';
import CardContainer from './Components/CardContainer';
import DropDownContainer from './Components/DropDownContainer';
import ScoreContainer from './Components/ScoreContainer';
import StopWatch from './Components/StopWatch';
import ReplayBtn from './Components/ReplayBtn';
import InfoDialog from './Components/InfoDialog';
import './App.css';
import './css/CardContainer.css';

function App() {
    let [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    let [bestTime, setBestTime] = useState(Infinity);
    const [isGameOver, setIsGameOver] = useState(true);
    const [isFetchDone, setIsFetchDone] = useState(false);
    const [weapon, setWeapon] = useState(null);
    const [cardNumberToRender] = useState(12);

    useEffect(() => {
        if (score === cardNumberToRender) {
            setIsGameOver(true);
        }
    }, [score, isGameOver, cardNumberToRender]);

    const handleUpScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const handleGameOver = (time) => {
        handleSetBestTime(time);
        handleSetBestScore();
        setScore(0);
        setIsGameOver(true);
        setWeapon(null);
    };

    const handleSetBestScore = () => {
        setBestScore((prevBestScore) => Math.max(prevBestScore, score));
    };

    const handleSetBestTime = (time) => {
        if (time < bestTime) {
            setBestTime(time);
        }
    };

    const handleSelectChange = (e) => {
        setWeapon(e);
        setIsGameOver(false);
    };

    return (
        <>
            <header>
                <h1>Memory Counter Skins</h1>
                {isGameOver && <InfoDialog />}
            </header>
            <main>
                <StopWatch isFetchDone={isFetchDone} gameOver={handleGameOver} isGameOver={isGameOver} />
                <ScoreContainer score={score} bestScore={bestScore} bestTime={bestTime} />
                <DropDownContainer selectedValueChange={handleSelectChange} isGameOver={isGameOver} />
                <CardContainer
                    cardNumberToRender={cardNumberToRender}
                    upScore={handleUpScore}
                    gameOver={handleGameOver}
                    isGameOver={isGameOver}
                    weaponSelected={weapon}
                    replay={handleGameOver}
                    fetchDone={() => setIsFetchDone(true)}
                />
                {!isGameOver && <ReplayBtn replay={handleGameOver} />}
            </main>
        </>
    );
}

export default App;
