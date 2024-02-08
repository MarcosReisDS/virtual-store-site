import { FC, useState } from "react"
import { SlArrowDown } from "react-icons/sl";
import "./styles.scss"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

interface IStore { }
const Store: FC<IStore> = () => {
    const [plusFilter, setPlusFilter] = useState<boolean>(false)

    return (
        <div className="container-store">
            <div className="header">
                <p>TÊNIS MASCULINOS</p>
                <span />
            </div>
            <div className="body">
                <div className="filter">
                    <div className="title">
                        <p>Filtrar por</p>
                    </div>
                    <div className="content">
                        <div>
                            <p>Preço</p>
                            <div onClick={() => plusFilter ? setPlusFilter(false) : setPlusFilter(true)}>
                                {plusFilter ?
                                    <span />
                                    :
                                    <>
                                        <span />
                                        <span />
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>Cor</p>
                            <div onClick={() => plusFilter ? setPlusFilter(false) : setPlusFilter(true)}>
                                {plusFilter ?
                                    <span />
                                    :
                                    <>
                                        <span />
                                        <span />
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>Tamanho</p>
                            <div onClick={() => plusFilter ? setPlusFilter(false) : setPlusFilter(true)}>
                                {plusFilter ?
                                    <span />
                                    :
                                    <>
                                        <span />
                                        <span />
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="select">
                        <div>
                            <input value="Selecionar por" />
                            <SlArrowDown className="arrow" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="img">
                                <img src="https://i.ibb.co/sP3kmTQ/pngwing-com-1.png" alt="" />
                            </div>
                            <div className="content">
                                <p>Sou um produto</p>
                                <p>R$ 220,00</p>
                                <button>Adicionar ao carrinho</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src="https://i.ibb.co/sP3kmTQ/pngwing-com-1.png" alt="" />
                            </div>
                            <div className="content">
                                <p>Sou um produto</p>
                                <p>R$ 220,00</p>
                                <button>Adicionar ao carrinho</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src="https://i.ibb.co/sP3kmTQ/pngwing-com-1.png" alt="" />
                            </div>
                            <div className="content">
                                <p>Sou um produto</p>
                                <p>R$ 220,00</p>
                                <button>Adicionar ao carrinho</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src="https://i.ibb.co/sP3kmTQ/pngwing-com-1.png" alt="" />
                            </div>
                            <div className="content">
                                <p>Sou um produto</p>
                                <p>R$ 220,00</p>
                                <button>Adicionar ao carrinho</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default Store