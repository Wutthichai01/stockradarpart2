import './App.css';
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Link to="form?ref=stockradars&email=example@siamsquared.com" >
                Go to form
            </Link>
        </div>
    );
}

export default App;
