
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactionRate from "./pages/ReactionRate";
import DinosaurGame from "./pages/DinosaurGame";

const Routers = () => {

  return (
    <Router>
      <Routes>
            <Route path="/reaction_rate" element={<ReactionRate/>}/>
            <Route path="/dinosaur_game" element={<DinosaurGame/>}/>
      </Routes>
    </Router>
  );
};

export default Routers;
