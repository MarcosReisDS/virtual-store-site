import { FC } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "./styles.scss"

interface IFooter { }
const Footer: FC<IFooter> = () => {
    return (
        <div className="footer">
            <div className="inputs">
                <div className="address">
                    <div className="logo">
                        <p>ENDEREÇO</p>
                        <span />
                    </div>
                    <div className="body">
                        <p>Rua Prates, 194 - Bom Retiro</p>
                        <p>São Paulo - SP, 01121-000</p>
                        <p>info@meusite.com</p>
                        <p>Tel.: (11) 3456-7890</p>
                    </div>
                    <div className="social-media">
                        <FaFacebookF className="media" />
                        <FaXTwitter className="media" />
                        <FaInstagram className="media" />
                    </div>
                </div>
                <div className="contact-us">
                    <div className="logo">
                        <p>FALE CONOSCO</p>
                        <span />
                    </div>
                    <div className="input">
                        <div>
                            <input type="text" placeholder="Nome" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Telefone" />
                        </div>
                        <div>
                            <textarea placeholder="Insira sua mensagem aqui"></textarea>
                        </div>
                    </div>
                    <div className="button">
                        <button>Enviar</button>
                    </div>

                </div>
                <div className="news">
                    <div className="logo">
                        <p>NOVIDADES</p>
                        <span />
                    </div>
                    <div className="content">
                        <p>Junte-se à lista de emails</p>
                        <input type="text" placeholder="Insira seu email aqui" />
                        <button>Assine agora</button>
                    </div>
                </div>
            </div>
            <div className="policy">
                <p>Política de Privacidade</p>
                <p>Política de Cookies</p>
            </div>
            <div className="baseboard">
                <p>© 2035 por ATUAL SNEAKERS. Orgulhosamente criado com Wix.com</p>
            </div>
        </div>
    )
}

export default Footer 