import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Send from "./pages/Send";
import Receive from "./pages/Receive";
import Swap from "./pages/Swap";
import SeedPhrase from "./pages/SeedPhrase";
import ConfirmSeed from './pages/ConfirmSeed';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/seed-phrase" element={<SeedPhrase />} />
         <Route path="/confirm-seed" element={<ConfirmSeed seedPhrase={["grape", "moon", "skate", "ocean", "plant", "star", "robot", "hill", "fish", "lamp", "wave", "tree"]} />} />
      </Routes>
    </Router>
  );
}

export default App;
