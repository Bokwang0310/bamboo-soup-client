// import { useRecoilValue } from "recoil";
// import { tempState } from "./state/temp";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import TopBar from "./components/TopBar";
import Main from "./components/Main";

import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <TopBar />
        <Main />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
