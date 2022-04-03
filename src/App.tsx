import { useRecoilValue } from "recoil";
import { tempState } from "./state/temp";
import Temp from "./components/Temp";

function App() {
  const value = useRecoilValue(tempState);
  return (
    <div>
      Hello, world!{value}
      <Temp />
    </div>
  );
}

export default App;
