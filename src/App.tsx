import { FC, useEffect, useState } from "react"
import Router from "./shared/router"
import NavBar from "./shared/components/NavBar"
import { useLocation } from "react-router-dom"
import ModalCart from "./shared/components/ModalCart"
import Contexts, { IUserType, ICartType, IProductType, Jwt } from './shared/contexts';
import userApi from "./shared/services/user"
import { getCookie } from "./shared/utils/cookies"
import productApi from "./shared/services/product"
import { jwtDecode } from "jwt-decode";

interface IApp {

}

const App: FC<IApp> = () => {
  const { pathname } = useLocation()
  const [navbarValue, setNavbarValue] = useState<boolean>(false);
  const [token, setToken] = useState<string>("")

  const [user, setUser] = useState<IUserType>({
    profile: '',
    name: '',
    surname: '',
    mail: '',
    password: '',
  })
  const [users, setUsers] = useState<IUserType[]>([])

  const [cart, setCart] = useState<ICartType[]>([])

  const [products, setProducts] = useState<IProductType[]>([])
  const [product, setProduct] = useState<IProductType>({
    image: '',
    description: '',
    name: '',
    price: '',
    quantity: '',
    type: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)

    setToken(getCookie("token").token);

    if (token) {
      const jwt: Jwt = jwtDecode(token)

      userApi.listUser(jwt?.email, token).then((data: any) => {
        setUser({
          id: data?.id,
          profile: data?.profile,
          name: data?.name,
          surname: data?.surname,
          mail: data?.mail,
          password: data?.password,
        })
      })
    }

    productApi.listProducts().then((data: any) => {
      setProducts(data)
    })

    userApi.listCart().then((data: any) => {
      setCart(data)
    })

  }, [pathname, token])

  return (
    <Contexts.Provider value={{
      token,
      user,
      users,
      setUser,
      setUsers,
      cart,
      setCart,
      product,
      setProduct,
      products,
      setProducts,
      onNavBarChange(value) {
        setNavbarValue(value);
      },
    }}>
      {window.location.pathname == "/entrar" || window.location.pathname == "/criar" ?
        ""
        :
        <>
          <NavBar />
          <ModalCart valueCart={navbarValue} />
        </>
      }
      <Router />
    </Contexts.Provider>
  )
}

export default App
