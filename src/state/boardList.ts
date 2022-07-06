import { atom } from "recoil";

export type Board = {
  id: string;
  title: string;
  date: Date;
  content: string;
};

export const boardListState = atom<Board[]>({
  key: "boardListState",
  default: [],
});
