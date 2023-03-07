import { FC, useState } from "react"
import "./style/index.scss"
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io"

interface ISelect { }
const Select: FC<ISelect> = () => {
    const [block, setBlock] = useState<boolean>(false)
    const [filter, setFilter] = useState<string[]>([
        "Selecinar por",
        "Mais novos",
        "Preço (menor ao maior)",
        "Preço (maior ao menor)",
        "Nome A - Z",
        "Nome Z - A"
    ])
    const [home, setHome] = useState<string>("Selecinar por")

    const mude = () => {
        if (block === true) {
            setBlock(false)
        }
        if (block === false) {
            setBlock(true)
        }
    }

    const blur = () => {
        setBlock(false)
    }

    const filterMude = (c: any) => {
        setHome(filter[c])
    }

    return (
        <div className="container-select">
            {block ? <IoIosArrowUp className="arrow" onClick={() => setBlock(false)} /> : < IoIosArrowDown className="arrow" onClick={() => setBlock(true)} />}
            <input type="button" className="select" onBlur={blur} onClick={mude} value={home} />
            <div className="itens" style={{ display: block ? "flex" : "none" }}>
                {filter?.map((item, index) => (
                    <input type="button" onMouseDown={() => filterMude(index)} value={item} className={`item ${index === 0 ? "top" : index === filter.length - 1 ? "bottom" : ""} ${home == item ? "select-item" : ""} `} />
                ))}
            </div>
        </div>
    )
}

export default Select