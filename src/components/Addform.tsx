import { useState } from "react";

import { useRecoilState } from "recoil";
import { addFormState } from "../state/form";
import { boardState, Board } from "../state/board";

import { nanoid } from "nanoid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FIVE_MINUTE = 60000 * 5;

function Addform() {
  const [open, setOpen] = useRecoilState(addFormState);
  const closeForm = () => setOpen(false);

  const [boardList, setBoardList] = useRecoilState(boardState);

  const deleteBoard = (id: string) => {
    const newBoardList = boardList.filter((board) => board.id === id);
    setBoardList(newBoardList);
  };

  const addBoard = (newBoard: Board) => {
    const currentId = newBoard.id;

    const newBoardList = [...boardList, newBoard];
    setBoardList(newBoardList);

    // 생성한 보드는 생성 직후 일정 시간 뒤에 자동 삭제 -> 백엔드에서 새로 구현 예정
    setTimeout(() => {
      deleteBoard(currentId);
    }, FIVE_MINUTE);
  };

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
