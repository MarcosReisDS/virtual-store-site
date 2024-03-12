import { FC, useEffect, useState } from "react"
import Router from "./shared/router"
import NavBar from "./shared/components/NavBar"
import { useLocation } from "react-router-dom"
import ModalCart from "./shared/components/ModalCart"
import Contexts, { IUserType, ICartType } from './shared/contexts';
import userApi from "./shared/services/user"
import { getCookie } from "./shared/utils/cookies"

interface IApp {

}

const App: FC<IApp> = () => {
  const { pathname } = useLocation()
  const [navbarValue, setNavbarValue] = useState<boolean>(false);

  const [user, setUser] = useState<IUserType>({
    profile: '',
    name: '',
    surname: '',
    mail: '',
    password: '',
  })
  const [cart, setCart] = useState<ICartType[]>([])

  const [product, setProduct] = useState<ProductType>({
    image: '',
    description: '',
    name: '',
    price: '',
    quantity: '',
    type: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)

    userApi.listUser(getCookie("user").id).then((data: any) => {
      setUser({
        id: data?.id,
        profile: data?.profile,
        name: data?.name,
        surname: data?.surname,
        mail: data?.mail,
        password: data?.password,
      })
    })

    userApi.listCart().then((data: any) => {
      setCart(data)
    })
  }, [pathname])

  return (
    <Contexts.Provider value={{
      user,
      setUser,
      cart,
      setCart,
      product,
      setProduct,
      onNavBarChange(value) {
        setNavbarValue(value);
      },
    }}>
      {window.location.pathname == "/entrar" ?
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
