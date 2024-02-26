import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
