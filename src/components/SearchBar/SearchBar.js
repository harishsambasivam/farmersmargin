import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import SideNav from "../SideNav/SideNav";
import { SidenavContext } from "../../contexts/sidenavContext";
import "./SearchBar.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "90%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [state, setState] = useContext(SidenavContext);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ left: open });
  };

  return (
    <div className="searchbar">
      <SideNav />
      <Paper component="form" className={classes.root}>
        <IconButton
          className={classes.iconButton}
          onClick={toggleDrawer(true)}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
