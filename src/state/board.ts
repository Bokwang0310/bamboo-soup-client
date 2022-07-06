import { atom } from "recoil";

export type Board = {
  id: string;
  title: string;
  date: Date;
  content: string;
};

export const boardState = atom<Board[]>({
  key: "boardState",
  default: [],
});
