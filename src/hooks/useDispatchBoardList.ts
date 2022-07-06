import { useRecoilState } from "recoil";
import { boardListState, Board } from "../state/boardList";

const FIVE_MINUTE = 60000 * 5;

export function useDispatchBoardList() {
  const [boardList, setBoardList] = useRecoilState(boardListState);

  const addBoard = (newBoard: Board) => {
    const newBoardList = [...boardList, newBoard];
    setBoardList(newBoardList);
  };

  const deleteBoard = (id: string) => {
    const newBoardList = boardList.filter((board) => board.id === id);
    setBoardList(newBoardList);
  };

  const cleanBoardList = () => {};

  return { addBoard, deleteBoard };
}
