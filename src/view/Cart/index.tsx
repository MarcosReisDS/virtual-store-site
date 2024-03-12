import { FC, useContext, useEffect, useState } from "react";
import { IoRemove, IoAdd, IoClose } from "react-icons/io5";
import "./styles.scss"
import Footer from "../../shared/components/Footer";
import userApi from "../../shared/services/user";
import { getCookie } from "../../shared/utils/cookies";
import Contexts, { IContext } from "../../shared/contexts";

interface ICart { }
const Cart: FC<ICart> = () => {
    const { cart, setCart } = useContext(Contexts) as IContext
    const [valueTotal, setValueTotal] = useState<number>(0)

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
        <div className="container-cart">
            <div className="itens-cart">
                <div className="cart">
                    <div className="title">
                        <p>Meu carrinho</p>
                    </div>
                    {cart.map((item, index) => (
                        item.userId == getCookie("user").id ?
                            <div className="item" key={index}>
                                <div className="img">
                                    <img src={item.image} alt="Minha foto" />
                                </div>
                                <div className="separation">
                                    <div className="content-one">
                                        <p>{item.name}</p>
                                        <div className="quantity">
                                            <IoRemove onClick={() => handleValueInput("negative", item.id)} />
                                            <span>{item.quantity}</span>
                                            <IoAdd onClick={() => handleValueInput("positive", item.id)} />
                                        </div>
                                        <p>R$ {item.price}</p>
                                        <IoClose className="close" onClick={() => handleDeleteItemCart(item.id)}/>
                                    </div>
                                    <div className="content-two">
                                        <p>R$ {item.price}</p>
                                        <p>Tamanho: {item.size}</p>
                                        <p>Cor: {item.color}</p>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                    ))}

                </div>
                <div className="order">
                    <div className="title">
                        <p>Resumo do pedido</p>
                    </div>
                    <div className="total-one">
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p>R$ {valueTotal}</p>
                        </div>
                        <div className="delivery">
                            <p>Entrega</p>
                            <p>Grátis</p>
                        </div>
                    </div>
                    <div className="total-two">
                        <div className="total">
                            <p>Total</p>
                            <p>R$ {valueTotal}</p>
                        </div>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart