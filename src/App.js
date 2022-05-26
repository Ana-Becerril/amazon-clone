import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";


function App() {
  return (
    <Router>
        <Routes>
        <Route path='/' element={<Header  />} />
        <Route path='/' element={<Home/>} />
        </Routes>
    </Router>
  );
}

export default App;
