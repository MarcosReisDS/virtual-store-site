import { FC, useEffect } from "react"
import Router from "./shared/router"
import NavBar from "./shared/components/NavBar"
import { useLocation } from "react-router-dom"

interface IApp { }
const App: FC<IApp> = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <NavBar />
      <Router />
    </>
  )
}

export default App
