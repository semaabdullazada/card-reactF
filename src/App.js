import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basket from './Components/Basket';
import Film from './Components/Film';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/film" element={<Film />} />
      </Routes>
    </Router>
  );
}

export default App;
