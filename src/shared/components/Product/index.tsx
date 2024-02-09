import { FC } from "react";
import "./styles.scss"
import { SlArrowDown } from "react-icons/sl";
import Footer from "../Footer";

interface IProduct { }
const Product: FC<IProduct> = () => {
    return (
        <div className="container-product">
            <div className="product">
                <div className="rota">
                    <span>Início / Masculino / Sou um produto</span>
                </div>
                <div className="item">
                    <div className="img">
                        <img src="https://i.ibb.co/sP3kmTQ/pngwing-com-1.png" alt="" />
                    </div>
                    <div className="data">
                        <p>Sou um produto</p>
                        <p>R$ 220,00</p>
                        <div className="size">
                            <label>Tamanho</label>
                            <div>
                                <input value="Selecionar" />
                                <SlArrowDown className="arrow" />
                            </div>
                        </div>
                        <div className="color">
                            <label>Cor: Azul</label>
                            <div>
                                <span>
                                    <span />
                                </span>
                            </div>
                        </div>
                        <div className="amount">
                            <label>Quantidade</label>
                            <div>
                                <input type="number" />
                            </div>
                        </div>
                        <div className="buttons">
                            <button>Adicionar ao carrinho</button>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p>Sou uma descrição do produto. Use este espaço para adicionar detalhes sobre seu produto, como tamanho, material, cuidados especiais, instruções e mais.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product