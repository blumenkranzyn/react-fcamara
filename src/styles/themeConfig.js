import { createMuiTheme } from '@material-ui/core/styles';

const themeConfig = createMuiTheme({
    palette: {
        type: "light",
        primary: {
          light: "#4B4C4D",
          main: "#FF4A00",
          dark: "#2e2e2d",
          contrastText: "#FFF"
        },
        secondary: {
          light: "#FF4A00",
          main: "#FF4A00",
          dark: "#2e2e2d",
          contrastText: "#FFF"
        }
      }
  });

export default themeConfig