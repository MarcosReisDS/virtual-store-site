import { FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cart from "../../utils/icons/Cart"
import UserIcon from "../../utils/icons/User"
import "./style/index.scss"

interface INavBar { }
const NavBar: FC<INavBar> = () => {

    const [showNav, setShowNav] = useState<boolean>(false)
    const navigate = useNavigate()

    const nada = (show: boolean) => {

     
    }



    const handleNavigation = (nav: string) => {
        switch (nav) {
            case "start":
                navigate("/inicio")
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
            <div className="container-header">
                <div className="container-logo">
                    <div>
                        <span>as</span>
                        <hr />
                    </div>
                    <span>atual sneakers</span>
                </div>

                <div className="container-nav" >
                    <div>
                        <button className="button"
                            onClick={() => handleNavigation("start")}
                            onMouseOver={() => setShowNav(false)}
                        >
                            Início
                        </button>
                        <button className="button store"
                            onMouseOver={() => nada(true)}
                            onMouseOut={() => nada(false)}
                        >
                            Loja
                        </button>
                        <div className="store" style={{ display: showNav ? "flex" : "none" }}>
                            <button className="button"
                                onMouseOver={() => nada(true)}
                            >
                                Masculino
                            </button>
                            <button className="button"
                                onMouseOver={() => setShowNav(true)}
                            >
                                Feminino
                            </button>
                            <button className="button"
                                onMouseOver={() => setShowNav(true)}
                            >
                                Promoções
                            </button>
                        </div>
                        <button className="button"
                            onClick={() => handleNavigation("about")}
                            onMouseOver={() => setShowNav(false)}
                        >
                            Sobre AS
                        </button>
                        <button className="button"
                            onClick={() => handleNavigation("service")}
                            onMouseOver={() => setShowNav(false)}
                        >
                            Atendimento ao Client
                        </button>
                    </div>
                    <div className="cart-login">
                        <UserIcon />
                        <button className="button login">Login</button>
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar