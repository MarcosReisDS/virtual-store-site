import { FC, useState } from "react"
import "./styles.scss"
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

interface INavBar { }
const NavBar: FC<INavBar> = () => {

    const [openMobile, setOpenMobile] = useState<boolean>(false)
    const [openModalMobile, setOpenModalMobile] = useState<boolean>(false)


    return (
        <div className="container-nav-bar">
            <div className="container-logo">
                <div className="logo">
                    <h1>as</h1>
                    <span />
                </div>
                <div className="name-logo">
                    <p>atual sneakers</p>
                </div>
            </div>
            <div className="container-navigation">
                <ul className="navigation pages">
                    <li><a>Início</a></li>
                    <li className="loja"><a>Loja</a>
                        <ul>
                            <li><a>Masculino</a></li>
                            <li><a>Feminino</a></li>
                            <li><a>Promoções</a></li>
                        </ul>
                    </li>
                    <li><a>Sobre AS</a></li>
                    <li><a>Atendimento ao Cliente</a></li>
                </ul>
                <ul className="navigation user-cart">
                    <li><a><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjU5YTMwbGgybTh2cnRxa3FycnZsMTlxYXZtazVidG9nYTRnMmcxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DFexVkRG7gX9oCy68r/giphy.gif" alt="Minha foto" /></a>
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
                        <img src="https://i.pinimg.com/564x/d8/82/58/d882585e5fde45a1b1ee0886ba433021.jpg" />
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