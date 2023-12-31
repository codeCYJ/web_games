import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ReactionRate from "components/pages/ReactionRate";
import DinosaurGame from "components/pages/DinosaurGame";
import Tetris from "components/pages/Tetris";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/reaction_rate" element={<ReactionRate />} />
        <Route path="/dinosaur_game" element={<DinosaurGame />} />
        <Route path="/tetris" element={<Tetris />} />
      </Routes>
    </Router>
  );
};

export default Routers;
