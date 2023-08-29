import './App.css';
import './css/Card-container.css';
import CardContainer from './Components/CardContainer';

// todo => Add Title
// todo => Add Scoreboard
// todo => Add choose weapon to play with
// todo => Add difficulty level (number of items displayed)
function App() {
    return (
        <>
            <CardContainer cardNumberToRender={6} />
        </>
    );
}

export default App;
