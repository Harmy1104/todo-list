const theme = (state = "dark", action) => {
  switch (action.type) {
    case "DARK":
      return (state = "dark");
    case "LIGHT":
      return (state = "light");
    default:
      return (state = "dark");
  }
};

export default theme;
