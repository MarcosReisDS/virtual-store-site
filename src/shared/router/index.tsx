import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../view/Home";
import Store from "../../view/Store";
import About from "../../view/About";
import Service from "../../view/Service";
import Profile from "../../view/Profile";
import Cart from "../../view/Cart";
import Product from "../components/Product";
import Create from "../../view/Login/Create";
import Enter from "../../view/Login/Enter";

interface IRouter {}
const Router: FC<IRouter> = () => {

    return (
        <Routes>
            <Route path="/entrar" element={<Enter/>} />
            <Route path="/criar" element={<Create/>} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/loja/masculino" element={<Store />} />
            <Route path="/loja/masculino/:id" element={<Product />} />
            <Route path="/loja/feminino" element={<Store />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/atendimento" element={<Service />} />
            <Route path="/perfil/enderecos" element={<Profile />} />
            <Route path="/perfil/carteira" element={<Profile />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default Router