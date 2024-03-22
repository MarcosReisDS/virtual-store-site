import { FC, useContext, useEffect, useState } from "react"
import "./styles.scss"
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookie } from "../../utils/cookies";
import Contexts, { IContext } from "../../contexts";

interface INavBar { }
const NavBar: FC<INavBar> = () => {

    const navigate = useNavigate()
    const [openMobile, setOpenMobile] = useState<boolean>(false)
    const [openModalMobile, setOpenModalMobile] = useState<boolean>(false)
    const [dropUser, setDropUser] = useState<boolean>(false)
    const [valueTotal, setValueTotal] = useState<number>(0)

    const { user, cart, onNavBarChange } = useContext(Contexts) as IContext

    const handleSidebarChange = (click: boolean) => {
        onNavBarChange(click);
    };

    const rotas = [
        { name: "Início", url: "/inicio" },
        {
            name: "Loja", url: window.location.pathname, class: "loja", drop: [
                { name: "Masculino", url: "/loja/masculino" },
                { name: "Feminino", url: "/loja/feminino" },
            ]
        },
        { name: "Sobre AS", url: "/sobre" },
        { name: "Atendimento ao Cliente", url: "/atendimento" },
    ]

    const userDrop = [
        { name: "Meus endereços", url: "/perfil/enderecos" },
        { name: "Minha carteira", url: "/perfil/carteira" },
        { name: "Minha conta", url: "/perfil" },
    ]

    const handleDeleteCookie = () => {
        deleteCookie("token")
        navigate(window.location.pathname)
    }


    const Calculadora = () => {
        const resultadoTotal = cart.reduce((total, objeto) => {
            const resultadoParcial = Number(objeto.quantity) // Multiplica os valores
            return total + resultadoParcial; // Subtrai o resultado parcial do total
        }, 0);

        setValueTotal(resultadoTotal)
    }

    useEffect(() => {
        Calculadora()
    }, [cart, valueTotal])

    return (
        <div className="container-nav-bar">
            <div className="container-logo">
                <div className="logo" onClick={() => navigate(`${rotas[0].url}`)}>
                    <h1>as</h1>
                    <span />
                </div>
                <div className="name-logo" onClick={() => navigate(`${rotas[0].url}`)}>
                    <p>atual sneakers</p>
                </div>
            </div>
            <div className="container-navigation">
                <ul className="navigation pages">
                    {rotas.map((item, index) => (
                        <>
                            <li className={item.class} key={index}><a onClick={() => navigate(`${item.url}`)}>{item.name}</a>
                                {item.name == "Loja" ?
                                    <>
                                        <ul>
                                            {item.drop?.map((drop, index) => (
                                                <>
                                                    <li key={index}><a onClick={() => navigate(`${drop.url}`)}>{drop.name}</a></li>
                                                </>
                                            ))}
                                        </ul>
                                    </>
                                    :
                                    ""
                                }
                            </li>
                        </>
                    ))}
                </ul>
                <ul className="navigation user-cart">
                    {getCookie("token") ?
                        <li className="get" onClick={() => setDropUser(!dropUser)}><a><img src={user.profile} alt="Minha foto" /></a>
                            <ul>
                                <li onClick={() => setDropUser(!dropUser)}><a><IoIosArrowDown size={20} /></a>
                                    <ul className={dropUser ? "drop" : ""}>
                                        {userDrop.map((userDrop, index) => (
                                            <>
                                                <li
                                                    key={index}
                                                    className={window.location.pathname == userDrop.url ? "selected" : ""}
                                                    onClick={() => navigate(userDrop.url)}
                                                ><a>{userDrop.name}</a></li>
                                            </>
                                        ))}
                                        <li onClick={() => handleDeleteCookie()}><a>Sair</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        :
                        <li><a onClick={() => navigate("/entrar")}><img src="https://i.ibb.co/VDCYXDG/user-5.png" alt="Minha foto" /></a>
                            <ul>
                                <li><a onClick={() => navigate("/entrar")}>Login</a></li>
                            </ul>
                        </li>
                    }
                    <li onClick={() => handleSidebarChange(true)}><a><BsFillHandbagFill color="#ffae36" size="32" /></a>
                        <ul>
                            <li><a>{valueTotal}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="container-navigation-mobile">
                <div className="cart">
                    <BsFillHandbagFill color="#ffae36" size="32" />
                    <span>{valueTotal}</span>
                </div>
                <div className={openModalMobile ? "hamburger close" : "hamburger"} onClick={() => openModalMobile ? setOpenModalMobile(false) : setOpenModalMobile(true)}>
                    {openModalMobile ?
                        <>
                            <span />
                            <span />
                        </>
                        :
                        <>
                            <span />
                            <span />
                            <span />
                        </>
                    }
                </div>
                <div className={openModalMobile ? "navigation" : "navigation close"}>
                    <div>
                        <img src="https://i.ibb.co/MNsF2kM/user.png" />
                        <span>Login</span>
                    </div>
                    <ul>
                        <li><a>Início</a></li>
                        <li className={openMobile ? "open" : ""} onClick={() => openMobile ? setOpenMobile(false) : setOpenMobile(true)}><a>Loja </a><span><IoIosArrowDown /></span>
                            <ul className={openMobile ? "itens" : ""}>
                                <li><a>Masculino</a></li>
                                <li><a>Feminino</a></li>
                                <li><a>Promoções</a></li>
                            </ul>
                        </li>
                        <li><a>Sobre AS</a></li>
                        <li><a>Atendimento ao Cliente</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar