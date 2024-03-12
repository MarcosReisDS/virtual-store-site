import { FC, useContext, useState } from "react"
import { SlArrowDown } from "react-icons/sl";
import Footer from "../../shared/components/Footer";
import "./styles.scss"
import { useNavigate } from "react-router-dom";
import Contexts, { IContext } from "../../shared/contexts";

interface IStore { }
const Store: FC<IStore> = () => {
    const navigate = useNavigate()
    const [plusFilter, setPlusFilter] = useState<boolean>(false)

    const { products } = useContext(Contexts) as IContext

    return (

        <div className="container-store">
            {window.location.pathname == "/loja/masculino" ?
                <>
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
                                {products.map((product, index) => (
                                    product.type == "Masculino" ?
                                        <div className="card" key={index} onClick={() => navigate(`/loja/masculino/${product.id}`)}>
                                            <div className="img">
                                                <img src={product.image} alt="Produto" />
                                            </div>
                                            <div className="content">
                                                <p>{product.name}</p>
                                                <p>R$ {product.price}</p>
                                                <button>Adicionar ao carrinho</button>
                                            </div>
                                        </div>
                                        :
                                        ""
                                ))}
                            </div>
                        </div>
                    </div>
                </>
                :
                <>

                    <div className="header">
                        <p>TÊNIS FEMININO</p>
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
                                {products.map((product, index) => (
                                    product.type == "Feminino" ?
                                        <div className="card" key={index} onClick={() => navigate("/loja/masculino/1")}>
                                            <div className="img">
                                                <img src={product.image} alt="Produto" />
                                            </div>
                                            <div className="content">
                                                <p>{product.name}</p>
                                                <p>R$ {product.price}</p>
                                                <button>Adicionar ao carrinho</button>
                                            </div>
                                        </div>
                                        :
                                        ""
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }
            <Footer />
        </div>
    )
}

export default Store