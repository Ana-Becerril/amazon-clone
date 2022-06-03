import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from './Login';


function App() {
  return (
    <>
    <Router>
    <Header/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
