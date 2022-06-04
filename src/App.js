import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from './Login'; 
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import Checkout from './Checkout'

function App() {
  // eslint-disable-next-line no-empty-pattern
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
       // eslint-disable-next-line react-hooks/exhaustive-deps
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
