import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Main from "./components/Main";
import Addform from "./components/Addform";
import Fab from "./components/Fab";

import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Main />
        <Addform />
        <Fab />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
