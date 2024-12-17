import { UserLoginInput, UserSignupInput } from "../validations/user.validator";

export interface ParamsType {
    params: any;
}

export interface QueryType {
    query: any;
}

export interface postMethodAPIType {
    url: string;
    data: UserLoginInput | UserSignupInput;
}