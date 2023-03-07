import { FC, useState } from "react"
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai"
import "./style/index.scss"

interface IPrice { }
const Price: FC<IPrice> = () => {

    const [minValue, setMinValue] = useState<number>(96)
    const [maxValue, setMaxValue] = useState<number>(220)
    const [inputMin, setInputMin] = useState<string>("96.00")
    const [inputMax, setInputMax] = useState<string>("220")
    const [step, setStep] = useState<number>(6.20)

    const handleChangeInput = (event: any, type: "min" | "max") => {

        const valueRange = event.target.value
        if (type === "min") {
            if (valueRange < parseInt(inputMax))
                setInputMin(valueRange)
        }

        if (type === "max") {
            if (valueRange > parseInt(inputMin)) {
                setInputMax(valueRange)
            }
        }
    }

    const calc = (maxValue - minValue) * 0.01

    return (
        <div className="filter-price">
            <span>Preço <AiOutlinePlus className="plus" /></span>
            <div className="container-slider">
                <div>
                    <div className="left-teste" style={{ width: `${(parseInt(inputMin) - minValue) / calc}%` }} />
                    <input type="range"
                        step={step}
                        min={minValue}
                        max={maxValue}
                        value={inputMin}
                        onChange={(e) => handleChangeInput(e, "min")}
                    />
                    <input type="range"
                        step={step}
                        min={minValue}
                        max={maxValue}
                        value={inputMax}
                        onChange={(e) => handleChangeInput(e, "max")}
                    />
                    <div className="right-teste" style={{ width: `${Math.abs((parseInt(inputMax) - maxValue) / calc)}%` }} />
                </div>

                <div
                    className="progress"
                ></div>
            </div>
            <div>
                <span>R$ {inputMin}</span>
                <span>R$ {inputMax}</span>
            </div>

            <hr />
        </div>
    )
}

export default Price