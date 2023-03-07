import { FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cart from "../../utils/icons/Cart"
import UserIcon from "../../utils/icons/User"
import "./style/index.scss"

interface INavBar { }
const NavBar: FC<INavBar> = () => {

    const [appear, setAppear] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleAppear = (appear: boolean) => {
        setAppear(appear)
        setTimeout(() => {
            setAppear(false)
        }, 5000)
    }

    const handleNavi = (nav: "start" | "masculine" | "feminine" | "promotions" | "about" | "service") => {
        switch (nav) {
            case "start":
                navigate("/inicio")
                break;

            case "masculine":
                navigate("/loja/masculino")
                break;

            case "feminine":
                navigate("/loja/feminino")
                break;

            case "promotions":
                navigate("/loja/promocoes")
                break;

            case "about":
                navigate("/sobre")
                break;

            case "service":
                navigate("/atendimento")
                break;
        }
    }


    return (
        <div className="container-main">
            <div className="logo">
                <span className="as">as</span>
                <hr className="line" />
                <span className="name">atual sneakers</span>
            </div>
            <div className="navigation">
                <div className="navbar">
                    <span className="start"
                        onMouseOver={() => handleAppear(false)}
                        onClick={() => handleNavi("start")}
                    >
                        Início
                    </span>
                    <span className="store" onMouseOver={() => handleAppear(true)}>Loja</span>
                    <div className="container-store" style={{ display: appear ? "flex" : "none" }} >
                        <span className="content" onClick={() => handleNavi("masculine")}>Masculino</span>
                        <span className="content" onClick={() => handleNavi("feminine")}>Feminino</span>
                        <span className="content" onClick={() => handleNavi("promotions")}>Promoções</span>

                    </div>
                    <span className="about"
                        onMouseOver={() => handleAppear(false)}
                        onClick={() => handleNavi("about")}
                    >
                        Sobre AS
                    </span>
                    <span className="service"
                        onMouseOver={() => handleAppear(false)}
                        onClick={() => handleNavi("service")}
                    >
                        Atendimento ao Cliente
                    </span>
                </div>
                <div className="my-settings">
                    <UserIcon />
                    <span className="login">Login</span>
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default NavBar