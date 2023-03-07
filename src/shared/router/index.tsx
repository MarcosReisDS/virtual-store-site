import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import About from "../../view/About"
import Service from "../../view/Service"
import Start from "../../view/Start"
import Store from "../../view/Store"

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <Routes>
            <Route path="/inicio" element={<Start />} />
            <Route path="/loja/masculino" element={<Store />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/atendimento" element={<Service />} />
        </Routes>
    )
}

export default Router