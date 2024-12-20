import { Post } from "@/lib/validations/post.validator";
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

export const postsState = atom({
    key: 'postsState',
    default: [] as Post[]
})