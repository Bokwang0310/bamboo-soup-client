import { useRecoilState } from "recoil";
import { boardListState, Board } from "../state/boardList";
import { isPassedMinute } from "../utils";

// const FIVE_MIN = 10000 * 6 * 5

export function useDispatchBoardList() {
  const [boardList, setBoardList] = useRecoilState(boardListState);

  const addBoard = (newBoard: Board) => {
    const newBoardList = [...boardList, newBoard];
    setBoardList(newBoardList);

    setTimeout(() => {
      deleteBoard(newBoard.id);
    }, 5000);
  };

  const deleteBoard = (id: string) => {
    const newBoardList = boardList.filter((board) => board.id === id);
    setBoardList(newBoardList);
  };

  const cleanBoardList = () => {
    const isPassed5Min = isPassedMinute(1);
    // const newBoardList = boardList.filter((board) => !isPassed5Min(board.date));
    setBoardList((boardList) =>
      boardList.filter((board) => !isPassed5Min(board.date))
    );
  };

  return { addBoard, deleteBoard, cleanBoardList };
}
