import { FC, useState } from "react"
import "./style/index.scss"

interface IAnimationTennis { }
const AnimationTennis: FC<IAnimationTennis> = () => {

    const [nada, setNada] = useState<string>("")
    const [one, setOne] = useState<string>("one")
    const [two, setTwo] = useState<string>("two")
    const [three, setthree] = useState<string>("three")

    // const intervalOne = (tag: string) => {
    //     setInterval(() => {
    //         setNada(tag)
    //     }, 2000)
    // }



    return (
        <div className="container-tennis">
            <div>
                <div className={`tenis one`} />
                <div className={`tenis two`} />
                <div className={`tenis three`} />
            </div>
            <div>
                <span>DESCONTOS DE 40% A 60%</span>
                <button className="button-buy">COMPRAR</button>
            </div>
        </div>
    )
}

export default AnimationTennis