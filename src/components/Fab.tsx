import { useSetRecoilState } from "recoil";
import { addFormState } from "../state/form";

import Mfab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function Fab() {
  const setOpen = useSetRecoilState(addFormState);
  return (
    <Mfab
      onClick={() => setOpen(true)}
      color="primary"
      aria-label="add"
      style={{
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed",
      }}
    >
      <AddIcon />
    </Mfab>
  );
}

export default Fab;
