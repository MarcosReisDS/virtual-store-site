import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../view/Home";
import Store from "../../view/Store";
import About from "../../view/About";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <Routes>
            <Route path="/inicio" element={<Home />} />
            <Route path="/loja/masculino" element={<Store />} />
            <Route path="/loja/feminino" element={<Store />} />
            <Route path="/loja/promocoes" element={<Store />} />
            <Route path="/sobre" element={<About />} />
        </Routes>
    )
}

export default Router