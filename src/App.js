import { HashRouter as Router, Routes, Route } from "react-router-dom";

//  pages
import Home from "./pages/Home";
import Send from "./pages/Send";
import Receive from "./pages/Receive";
import Swap from "./pages/Swap";
import SeedPhrase from "./pages/SeedPhrase";
import ConfirmSeed from "./pages/ConfirmSeed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/seed-phrase" element={<SeedPhrase />} />
        <Route path="/confirm-seed" element={<ConfirmSeed />} />
      </Routes>
    </Router>
  );
}

export default App;
