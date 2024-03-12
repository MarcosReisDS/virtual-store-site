import { FC, useContext, useEffect, useState } from "react";
import "./styles.scss"
import Footer from "../Footer";
import productApi from "../../services/product";
import { IoIosArrowDown } from "react-icons/io";
import userApi from "../../services/user";
import { getCookie } from "../../utils/cookies";
import Contexts, { IContext } from "../../contexts";

interface IProduct { }
const Product: FC<IProduct> = () => {
    
    const { cart, setCart, product, setProduct, onNavBarChange } = useContext(Contexts) as IContext

    const [size, setSize] = useState<SizeType[]>([])
    const [colors, setColors] = useState<ColorType[]>([])

    const [valueInput, setValueInput] = useState<number>(1)
    const [valueSelect, setValueSelect] = useState<string>("")


    const handleValueInput = (type: "positive" | "negative") => {
        if (type == "positive") {
            if (valueInput == Number(product.quantity)) {
                setValueInput(valueInput)
            } else {
                setValueInput(valueInput + 1)
            }
        }

        if (type == "negative") {
            if (valueInput == 1) {
                setValueInput(valueInput)
            } else {
                setValueInput(valueInput - 1)
            }
        }
    }

    const viewProduct = () => {
        let rota = window.location.pathname;
        let parametros = rota.split('/').filter(param => param !== '');
        let ultimoParametro = parametros[parametros.length - 1];
        let numero = parseInt(ultimoParametro, 10);

        productApi.listProducts(numero).then((data: any) => {
            setProduct(data)
        })
    }

    const handleCreateCart = async (click: boolean) => {
        const filterColor = colors.filter((color) => color.productId == product.id)

        await userApi.createCart(getCookie("user").id, {
            image: product.image,
            name: product.name,
            price: product.price,
            quantity: String(valueInput),
            type: product.type,
            size: valueSelect,
            color: filterColor[0].name,
        })
        
        userApi.listCart().then((data: any) => {
            setCart(data)
        })
        onNavBarChange(click);
    }


    useEffect(() => {
        viewProduct()
        productApi.listSizes().then((data: any) => {
            setSize(data)
        })
        productApi.listColors().then((data: any) => {
            setColors(data)
        })
    }, [cart, valueSelect, valueInput])

    return (
        <div className="container-product">
            <div className="product">
                <div className="rota">
                    <span>Início / Masculino / {product.name}</span>
                </div>
                <div className="item">
                    <div className="img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="data">
                        <p>{product.name}</p>
                        <p>R$ {product.price}</p>
                        <div className="size">
                            <label>Tamanho</label>
                            <div>
                                <select onChange={(e) => setValueSelect(e.target.value)}>
                                    <option value="Selecionar">Selecionar</option>
                                    {size.map((size, index) => (
                                        size.productId == product.id ?
                                            <option key={index} value={size.size}>{size.size}</option>
                                            :
                                            ""
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="color">
                            {colors.map((color, index) => (
                                color.productId == product.id ?
                                    <>
                                        <label key={index}>Cor: {color.name}</label>
                                        <div>
                                            <span>
                                                <span style={{ backgroundColor: color.value }} />
                                            </span>
                                        </div>
                                    </>
                                    :
                                    ""
                            ))}
                        </div>
                        <div className="amount">
                            <label>Quantidade</label>
                            <div>
                                <input type="number" value={valueInput} disabled onChange={(e) => setValueInput(e.target.valueAsNumber)}/>
                                <div className="positive-negative">
                                    <IoIosArrowDown
                                        className={valueInput == Number(product.quantity) ? "arrow positive disabled" : "arrow positive"}
                                        onClick={() => handleValueInput("positive")}
                                    />
                                    <IoIosArrowDown
                                        className={valueInput == 1 ? "arrow negative disabled" : "arrow negative"}
                                        onClick={() => handleValueInput("negative")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleCreateCart(true)}>Adicionar ao carrinho</button>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p>{product.description}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product