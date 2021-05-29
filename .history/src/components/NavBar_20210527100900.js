import { withRouter } from "react-router";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  buttons: {
    margin: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const confirmLogout = () => window.confirm("Are you sure you want to logout?");

const NavBar = ({ logged_in, history }, props) => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="nav-bar">
        <Toolbar>
          <Typography
            variant="h3"
            className={classes.title}
            onClick={() => history.push("/")}
          >
            <span style={{ cursor: "pointer" }}>Sneakers</span>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              // onChange={()=> props.handleInputChange()}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
              </div>
              <Button
                className={classes.buttons}
                variant="contained"
                color="secondary"
                onClick={() => history.push("/")}
              >
                <HomeIcon/>
              </Button>
          {!logged_in && (
            <>
              <Button
                className={classes.buttons}
                variant="contained"
                color="secondary"
                onClick={() => {
                  localStorage.clear()
                  history.push("/signin")
                }
                }
              >
                Login
              </Button>
              <Button
                className={classes.buttons}
                variant="contained"
                color="secondary"
                onClick={() => {
                  localStorage.clear()
                  history.push("/signup")
                }
              }
              >
                Sign Up
              </Button>
            </>
          )}
          {logged_in && (
            <>
              <Button
                className={classes.buttons}
                variant="contained"
                color="secondary"
                component={Link}
                to={`/user/${localStorage.getItem("user_id")}`}
              >
                {localStorage.getItem("username")}'s Closet
              </Button>
              <Button
                className={classes.buttons}
                variant="contained"
                color="secondary"
                onClick={() => confirmLogout() && history.push("/logout")}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(NavBar);
