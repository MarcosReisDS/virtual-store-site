import { FC } from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import "./style/index.scss"

interface IFooter { }
const Footer: FC<IFooter> = () => {
    return (
        <div className="container-send-me">
            <div className="send">
                <div className="address">
                    <div className="container">
                        <span className="logo">ENDEREÇO</span>
                        <hr />
                    </div>
                    <div className="content">
                        <span className="content-address">Rua Prates, 194 - Bom Retiro</span>
                        <span className="content-address">São Paulo - SP, 01121-000</span>
                        <span className="content-address">info@meusite.com</span>
                        <span className="content-address">Tel: (11) 3456-7890</span>
                    </div>
                    <div className="network-element">
                        <FaFacebookF className="network facebook" />
                        <FaTwitter className="network twitter" />
                        <FaInstagram className="network instagram" />
                    </div>
                </div>
                <div className="contact-us">
                    <div className="container">
                        <span className="logo">FALE CONOSCO</span>
                        <hr />
                    </div>
                    <div className="container-input">
                        <div className="content">
                            <input type="text" className="input" placeholder="Nome" />
                            <input type="email" className="input" placeholder="Email" />
                            <input type="tel" className="input" placeholder="Telefone" />
                        </div>
                        <textarea placeholder="Insira sua mensagem aqui"></textarea>
                    </div>
                    <div className="button">
                        <button>Enviar</button>
                    </div>
                </div>
                <div className="news">
                    <div className="container">
                        <span className="logo">NOVIDADES</span>
                        <hr />
                    </div>
                    <div className="send">
                        <span>Junte-se à lista de emails</span>
                        <input type="text" placeholder="Insira seu email aqui" />
                        <button>Assine agora</button>
                    </div>
                </div>
            </div>
            <div className="politica">
                <span>Política de Privacidade</span>
                <span>Política de Cookies</span>
            </div>
            <div className="copi">
                <span>© 2035 por ATUAL SNEAKERS. Orgulhosamente criado com Wix.com</span>
            </div>
        </div>
    )
}

export default Footer