import { FC, useState } from "react"
import { SlArrowDown } from "react-icons/sl";
import Footer from "../../shared/components/Footer";
import "./styles.scss"

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
            <Footer />
        </div>
    )
}

export default Store