import { atom } from "recoil";

export const isAuthenticated = atom({
    key: 'isAuthenticated',
    default: false,
});

export const sessionState = atom({
    key: 'sessionState',
    default: {
        user: {
            id: '',
            name: '',
            email: '',
            image: ''
        },
        token: ''
    }
})