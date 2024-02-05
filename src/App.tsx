import { FC } from "react"
import Router from "./shared/router"
import NavBar from "./shared/components/NavBar"

interface IApp { }
const App: FC<IApp> = () => {
  return (
    <>
      <NavBar />
      <Router />
    </>
  )
}

export default App
