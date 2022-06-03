import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from './Login'; 
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import Checkout from './Checkout'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    }
  }, [])
  return (
    <>
    <Router>
    <Header/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/checkout' element={<Checkout/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
