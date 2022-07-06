import { atom } from "recoil";

export const addFormState = atom<boolean>({
  key: "addFormState",
  default: false,
});
