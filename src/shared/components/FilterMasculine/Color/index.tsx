import { FC, useState } from "react"
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai"
import "./style/index.scss"

interface IColor { }
const Color: FC<IColor> = () => {

    const [appearColor, setAppearColor] = useState<string>("")
    const [colorYellow, setColorYellow] = useState<string>("Amarelo")
    const [colorBlue, setColorBlue] = useState<string>("Azul")
    const [colorWhite, setColorWhite] = useState<string>("Branco")
    const [colorBlack, setColorBlack] = useState<string>("Preto")

    const showNameColors = (color: "yellow" | "blue" | "white" | "black" | "") => {
        if (color === "yellow") {
            setAppearColor(`: ${colorYellow}`)
        }
        if (color === "blue") {
            setAppearColor(`: ${colorBlue}`)
        }
        if (color === "white") {
            setAppearColor(`: ${colorWhite}`)
        }
        if (color === "black") {
            setAppearColor(`: ${colorBlack}`)
        }
        if (color === "") {
            setAppearColor("")
        }
    }

    return (
        <div className="filter-color">
            <span>Cor{appearColor}<AiOutlinePlus className="plus" /></span>
            <div className="container-color-masculine">
                <div className="color-primary yellow">
                    <input type="checkbox"
                        className="color"
                        value={colorYellow}
                        onMouseOver={() => showNameColors("yellow")}
                        onMouseOut={() => showNameColors("")}
                    />
                </div>
                <div className="color-primary blue">
                    <input type="checkbox"
                        className="color"
                        value={colorBlue}
                        onMouseOver={() => showNameColors("blue")}
                        onMouseOut={() => showNameColors("")}
                    />
                </div>
                <div className="color-primary white">
                    <input type="checkbox"
                        className="color"
                        value={colorWhite}
                        onMouseOver={() => showNameColors("white")}
                        onMouseOut={() => showNameColors("")}
                    />
                </div>
                <div className="color-primary black">
                    <input type="checkbox"
                        className="color"
                        value={colorBlack}
                        onMouseOver={() => showNameColors("black")}
                        onMouseOut={() => showNameColors("")}
                    />
                </div>

            </div>
            <hr />
        </div>
    )
}

export default Color