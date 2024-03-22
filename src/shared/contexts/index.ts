import { Dispatch, SetStateAction, createContext } from "react";

export interface IUserType {
    id?: number;
    profile: string;
    name: string;
    surname: string;
    mail: string;
    password: string;
}

export interface ICartType {
    id?: number;
    userId?: number;
    image: string;
    name: string;
    price: string;
    quantity: string;
    type: string;
    size: string;
    color: string;
}

export interface IProductType {
    id?: number;
    image: string;
    name: string;
    description: string;
    price: string;
    quantity: string;
    type: string;
}

export interface Jwt {
    email: string;
    exp: number;
    iat: number;
    name: string;
    sub: number;
}

export interface IContext {
    user: IUserType
    users: IUserType[]
    cart: ICartType[]
    product: IProductType
    products: IProductType[]
    token: string;
    setToken: Dispatch<SetStateAction<string>>
    setUser: Dispatch<SetStateAction<IUserType>>;
    setUsers: Dispatch<SetStateAction<IUserType[]>>;
    setCart: Dispatch<SetStateAction<ICartType[]>>;
    setProduct: Dispatch<SetStateAction<IProductType>>;
    setProducts: Dispatch<SetStateAction<IProductType[]>>;
    onNavBarChange: (value: any) => void;
}

const Contexts = createContext<IContext | {}>({});

export default Contexts