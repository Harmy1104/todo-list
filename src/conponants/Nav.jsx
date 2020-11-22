import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { Brightness3, WbSunnyRounded } from "@material-ui/icons";
import { ThemeContext, useThemeContext } from "../context/ThemeContext";

const Nav = ({ name }) => {
  const classes = useStyles();
  const { isDarkMode, toggleMode } = useThemeContext();

  return (
    <div className={classes.toolBar}>
      <Typography variant="h3">{name}</Typography>
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
const useStyles = makeStyles({
  toolBar: {
    display: "flex",
    width: "100vw",
    justifyContent: "flex-end",
  },
  icon: {
    marginTop: "2rem",
    marginRight: "2rem",
  },
});

export default Nav;
