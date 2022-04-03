import { atom } from "recoil";

export const tempState = atom<number>({
  key: "tempState",
  default: 0,
});
