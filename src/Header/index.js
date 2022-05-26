import React from "react";
import styles from "./style.module.css";
import {
  TextField,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  InputAdornment,
  Box,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CenterFocusStrong } from "@material-ui/icons";

function Header() {
  return (
    <AppBar
      position="static"
      style={{ background: "#131921", display: "flex" }}
    >
      <CssBaseline />
      <Toolbar>
        <Typography ></Typography>
        <div className={styles.logoSearch}>
          <div className={styles.logo}>Logo</div>
          <TextField
            variant="outlined"
            size="small"
            style={{
              width: "80%",
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
          <Link to="/login" className={styles.links}>
            <small> Hello, someone@some.com</small> 
            <br/> 
            <p className={styles.secondLine}>Sign Out</p>
          </Link>
          <Link to="/return-orders" className={styles.links}>
            <small>Returns</small>
            <br/>
            <p className={styles.secondLine}>and Orders</p>
          </Link>
          <Link to="/amazon-prime" className={styles.links}>
            <small>Your</small> 
            <br/>
            <p className={styles.secondLine}>Prime</p></Link>
          <Link to="/shopping-basket" className={styles.links}>
          <InputAdornment>
                    <ShoppingCartIcon fontSize="large" style={{marginTop:'10px', alignSelf:'center '}}/> 0
                </InputAdornment>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;