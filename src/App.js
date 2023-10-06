import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/registration" element={<Register/>}  />
                <Route path="/" element={<MainPage/>}  />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
