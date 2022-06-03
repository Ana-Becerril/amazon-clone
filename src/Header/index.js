import React from "react";
import styles from "./style.module.css";
import {
  TextField,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Login from "../Login/index";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import Checkout from '../Checkout/index';

function Header() {
  const [{ basket, user }] = useStateValue();
  const history = useNavigate();

  const signOutUser = (event) => {
    event.preventDefault();
    auth
      .signOut()
      .then((auth) => {
        history("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <AppBar position="fixed" style={{ background: "#131921", display: "flex" }}>
      <CssBaseline />
      <Toolbar>
        <Typography></Typography>
        <div className={styles.logoSearch}>
          <div className={styles.logo}>
            <Link to="/">
              <img
                className={styles.headerLogo}
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
          </div>
          <TextField
            variant="outlined"
            size="small"
            style={{
              width: "100%",
              margin: "10px",
              background: "#fff",
              borderRadius: "5px",
            }}
            InputProps={{
              style: {
                paddingRight: 0,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    style={{
                      background: "#f3a847",
                      padding: "8px",
                      borderStartStartRadius: "0px",
                    }}
                    component="span"
                  >
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={styles.navContainer}>
          <Link
            to={!user && "/login"}
            component={Login}
            className={styles.links}
          >
            <small> Hello, {user?.email}</small>
            <br />
            <p onClick={signOutUser} className={styles.secondLine}>
              {user ? "Sign Out" : "Sign In"}
            </p>
          </Link>
          <Link to="/return-orders" className={styles.links}>
            <small>Returns</small>
            <br />
            <p className={styles.secondLine}>and Orders</p>
          </Link>
          <Link to="/amazon-prime" className={styles.links}>
            <small>Your</small>
            <br />
            <p className={styles.secondLine}>Prime</p>
          </Link>
          <Link 
          to="/checkout" 
          component={Checkout} 
          className={styles.links}>
            <InputAdornment>
              <ShoppingCartIcon
                fontSize="large"
                style={{ marginTop: "10px", alignSelf: "center " }}
              />
              <span>{basket?.length}</span>
            </InputAdornment>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
