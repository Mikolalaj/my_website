import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoContent from "./pages/NoContent";
import './App.scss';

function App() {
    return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoContent />} />
    </Routes>
    </div>
    );
}

export default App;
