import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../view/Home";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <Routes>
            <Route path="/inicio" element={<Home />} />
        </Routes>
    )
}

export default Router