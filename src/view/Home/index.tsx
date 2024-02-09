import { FC } from "react"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "./styles.scss"

interface IHome { }
const Home: FC<IHome> = () => {
    return (
        <div className="container-home">
            <div className="one">
                <img src="https://static.wixstatic.com/media/84770f_e79251bac8554e33b08eb677c53a8e87~mv2.jpg/v1/fill/w_1098,h_800,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_e79251bac8554e33b08eb677c53a8e87~mv2.jpg" alt="foto de fundo" />
                <div className="shadow">
                    <div>
                        <p>as</p>
                        <span />
                    </div>
                    <p>ATUAL SNEAKERS</p>
                    <button>COMPRAR</button>
                </div>
            </div>
            <div className="two">
                <div className="man">
                    <img src="https://static.wixstatic.com/media/84770f_947e5c5f36f841908cc0472b141492f1~mv2.jpg/v1/fill/w_549,h_412,q_90/84770f_947e5c5f36f841908cc0472b141492f1~mv2.webp" alt="" />
                    <div>
                        <p>COLEÇÃO MASCULINA</p>
                    </div>
                </div>
                <div className="woman">
                    <img src="https://static.wixstatic.com/media/84770f_894bbd9b59ec4b6581ab5c9b6b310743~mv2.jpg/v1/fill/w_549,h_412,q_90/84770f_894bbd9b59ec4b6581ab5c9b6b310743~mv2.webp" alt="" />
                    <div>
                        <p>COLEÇÃO FEMININA</p>
                    </div>
                </div>
            </div>
            <div className="three">
                <img src="https://i.ibb.co/gD92kh1/pngwing-com.png" alt="" />
                <div>
                    <p>DESCONTOS DE 40% A 60%</p>
                    <button>COMPRAR</button>
                </div>
            </div>
            <div className="four">
                <div className="one">
                    <img src="https://i.ibb.co/sP3kmTQ/pngwing-com-1.png" alt="" />
                    <img src="https://i.ibb.co/sP3kmTQ/pngwing-com-1.png" alt="" />
                    <img src="https://i.ibb.co/sP3kmTQ/pngwing-com-1.png" alt="" />
                </div>
                <div className="two">
                    <img src="https://i.ibb.co/gD92kh1/pngwing-com.png" alt="" />
                    <img src="https://i.ibb.co/gD92kh1/pngwing-com.png" alt="" />
                    <img src="https://i.ibb.co/gD92kh1/pngwing-com.png" alt="" />
                </div>
            </div>
            <div className="footer-home">
                <div className="logo">
                    <p>as</p>
                    <span />
                </div>
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
        </div>
    )
}

export default Home