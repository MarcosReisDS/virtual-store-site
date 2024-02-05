import { FC } from "react"
import "./styles.scss"
import { BsFillHandbagFill } from "react-icons/bs";

interface INavBar { }
const NavBar: FC<INavBar> = () => {
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
        </div>
    )
}

export default NavBar