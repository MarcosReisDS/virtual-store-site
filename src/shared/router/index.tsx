import { FC } from "react";
import { Route, Routes } from "react-router-dom";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Olá mundo</p>}/> 
        </Routes>
    )
}

export default Router