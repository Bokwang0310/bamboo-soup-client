// import { useRecoilValue } from "recoil";
// import { tempState } from "./state/temp";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Main from "./components/Main";
import Fab from "./components/Fab";

import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Main />
        <Fab />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
