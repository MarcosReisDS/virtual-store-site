import { FC, useState } from "react"
import "./styles.scss"
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface INavBar { }
const NavBar: FC<INavBar> = () => {

    const navigate = useNavigate()
    const [openMobile, setOpenMobile] = useState<boolean>(false)
    const [openModalMobile, setOpenModalMobile] = useState<boolean>(false)

    const rotas = [
        { name: "Início", url: "/inicio" },
        {
            name: "Loja", class: "loja", drop: [
                { name: "Masculino", url: "/loja/masculino" },
                { name: "Feminino", url: "/loja/feminino" },
                { name: "Promoções", url: "/loja/promocoes" }
            ]
        },
        { name: "Sobre AS", url: "/sobre" },
        { name: "Atendimento ao Cliente", url: "/atendimento" },
    ]

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
                    {rotas.map((item) => (
                        <>
                            <li className={item.class}><a onClick={() => navigate(`${item.url}`)}>{item.name}</a>
                                {item.name == "Loja" ?
                                    <>
                                        <ul>
                                            {item.drop?.map((drop) => (
                                                <>
                                                    <li><a onClick={() => navigate(`${drop.url}`)}>{drop.name}</a></li>
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
                    <li><a><img src="https://i.ibb.co/VDCYXDG/user-5.png" alt="Minha foto" /></a>
                        <ul>
                            <li><a>Login</a></li>
                        </ul>
                    </li>
                    <li><a><BsFillHandbagFill color="#ffae36" size="32" /></a>
                        <ul>
                            <li><a>0</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="container-navigation-mobile">
                <div className="cart">
                    <BsFillHandbagFill color="#ffae36" size="32" />
                    <span>0</span>
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