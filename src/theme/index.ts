import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#e6e6e6",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#3d4c41",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#e6e6e6",
    },
    secondary: {
      // light: "#999999",
      main: "#999999",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#e6e6e6",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
