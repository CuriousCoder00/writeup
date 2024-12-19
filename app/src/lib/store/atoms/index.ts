import { atom } from "recoil";

export const isAuthenticated = atom({
    key: 'isAuthenticated',
    default: false,
});