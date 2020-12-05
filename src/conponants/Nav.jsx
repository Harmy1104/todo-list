import {
  Avatar,
  Button,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Brightness3, WbSunnyRounded } from "@material-ui/icons";
import { useThemeContext } from "../context/ThemeContext";
import { useUserContext } from "../context/UserContext";
import { auth } from "../firebase";

const Nav = (props) => {
  const classes = useStyles();
  const { isDarkMode, toggleMode } = useThemeContext();
  const { user } = useUserContext();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      props.props.history.push("/");
    });
  };

  return (
    <div className={classes.toolBar}>
      <Avatar
        alt={user.displayName}
        src={user.providerData[0].photoURL}
        className={classes.avatar}
      />
      <Typography variant="h5" className={classes.name}>
        Hello, {user.displayName}
      </Typography>
      <Button className={classes.icon} onClick={() => handleSignOut()}>
        Sign Out
      </Button>
      <IconButton
        className={classes.icon}
        onClick={toggleMode}
        aria-label="mode"
      >
        {isDarkMode ? <WbSunnyRounded /> : <Brightness3 />}
      </IconButton>
    </div>
  );
};

// CSS
const useStyles = makeStyles((theme) => ({
  toolBar: {
    width: "100vw",
    marginTop: "2rem",
    display: "flex",
    // justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(5),
  },
  name: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(5),
    flexGrow: "1",
  },
  avatar: {
    marginLeft: theme.spacing(7),
  },
}));

export default Nav;
