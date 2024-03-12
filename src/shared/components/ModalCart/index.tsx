import { FC, useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoRemove, IoAdd, IoClose } from "react-icons/io5";
import "./styles.scss"
import { useNavigate } from "react-router-dom";
import userApi from "../../services/user";
import { getCookie } from "../../utils/cookies";
import Contexts, { IContext } from "../../contexts";


interface IModalCart {
    valueCart: boolean
}
const ModalCart: FC<IModalCart> = ({ valueCart }) => {

    const navigate = useNavigate()
    const [valueTotal, setValueTotal] = useState<number>(0)

    const { cart, setCart, onNavBarChange } = useContext(Contexts) as IContext

    const handleSidebarChange = (click: boolean) => {
        onNavBarChange(click);
    };

    const handleValueInput = (type: "positive" | "negative", idProduct: any) => {
        const filterCart = cart.filter((cart) => cart.id == idProduct)

        if (filterCart) {
            if (type == "positive") {
                if (filterCart[0].quantity == "30") {
                    userApi.updateCart(filterCart[0], filterCart[0].quantity)
                } else {
                    let value: any = Number(filterCart[0].quantity) + 1
                    userApi.updateCart(filterCart[0], String(value)).then(() => {
                        userApi.listCart().then((data: any) => {
                            setCart(data)
                        })
                    })
                }
            }

            if (type == "negative") {
                if (filterCart[0].quantity == "1") {
                    userApi.updateCart(filterCart[0], filterCart[0].quantity)
                } else {
                    let value: any = Number(filterCart[0].quantity) - 1
                    userApi.updateCart(filterCart[0], String(value)).then(() => {
                        userApi.listCart().then((data: any) => {
                            setCart(data)
                        })
                    })
                }
            }
        }
    }

    const handleDeleteItemCart = (id: any) => {
        userApi.deleteCart(id).then(() => {
            setCart(cart?.filter((cart) => cart?.id !== id))
        })
    }

    const Calculadora = () => {
        const resultadoTotal = cart.reduce((total, objeto) => {
            const resultadoParcial = Number(objeto.quantity) * Number(objeto.price.replace(",", "").replace("00", "")) // Multiplica os valores
            return total + resultadoParcial; // Subtrai o resultado parcial do total
        }, 0);

        setValueTotal(resultadoTotal)
    }

    useEffect(() => {
        Calculadora()
    }, [cart])

    return (
        <div className={valueCart ? "container-modal-cart" : "container-modal-cart closed"}>
            <div className={valueCart ? "modal" : "modal close"}>
                <div className="heade">
                    <div>
                        <div onClick={() => handleSidebarChange(false)}>
                            <IoIosArrowForward />
                        </div>
                    </div>
                    <div>
                        <p>Carrinho</p>
                    </div>
                </div>
                <div className="body">
                    <div>
                        <div>
                            {cart.map((item, index) => (
                                item.userId == getCookie("user").id ?
                                    <div className="item" key={index}>
                                        <div className="remove">
                                            <div onClick={() => handleDeleteItemCart(item.id)}>
                                                <IoClose />
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img src={item.image} alt="imagem" />
                                        </div>
                                        <div className="content">
                                            <p>{item.name}</p>
                                            <p>R$ {item.price}</p>
                                            <div className="quantity">
                                                <input type="number" value={item.quantity} disabled />
                                                <div>
                                                    <IoRemove className="icon" onClick={() => handleValueInput("negative", item.id)} />
                                                    <IoAdd className="icon" onClick={() => handleValueInput("positive", item.id)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>Subtotal</p>
                        <p>R$ {valueTotal}</p>
                    </div>
                    <div>
                        <button onClick={() => {navigate("/cart"); handleSidebarChange(false)}}>Ver carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCart