import { useState } from "react";

import { useRecoilState } from "recoil";
import { addFormState } from "../state/form";
import { useDispatchBoardList } from "../hooks/useDispatchBoardList";

import { nanoid } from "nanoid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Addform() {
  const [open, setOpen] = useRecoilState(addFormState);
  const closeForm = () => setOpen(false);

  const { addBoard } = useDispatchBoardList();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Dialog open={open} onClose={closeForm}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>제목</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="title"
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogContent>
        <DialogContentText>내용</DialogContentText>
        <TextField
          margin="dense"
          id="content"
          label="content"
          type="text"
          fullWidth
          variant="standard"
          multiline
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeForm}>Cancel</Button>
        <Button
          onClick={() => {
            closeForm();
            addBoard({
              id: nanoid(),
              date: new Date(),
              title: title,
              content: content,
            });
            // 입력 후 필드 초기화
            setTitle("");
            setContent("");
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Addform;
