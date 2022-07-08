import { useSetRecoilState } from "recoil";
import { boardListState, Board } from "../state/boardList";
import { isPassedMinute } from "../utils";

// const FIVE_MIN = 10000 * 6 * 5

export function useDispatchBoardList() {
  const setBoardList = useSetRecoilState(boardListState);

  const addBoard = (newBoard: Board) => {
    setBoardList((boardList) => [...boardList, newBoard]);
  };

  const deleteBoard = (id: string) => {
    setBoardList((boardList) => boardList.filter((board) => board.id === id));
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
