import { FC, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import "./style/index.scss"



interface ISize { }
const Size: FC<ISize> = () => {

    const [sizeThirtyEight, setSizeThirtyEight] = useState<string>("38")
    const [sizeThirtyNine, setSizeThirtyNine] = useState<string>("39")
    const [sizeForty, setSizeForty] = useState<string>("40")
    const [sizeFortyOne, setSizeFortyOne] = useState<string>("41")
    const [sizeFortyTwo, setSizeFortyTwo] = useState<string>("42")

    return (
        <div className="filter-size">
            <span>Tamanho<AiOutlinePlus className="plus" /></span>
            <div className="container-size">
                <div>
                    <input type="checkbox" />
                    <span className="number one">38</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="number two">39</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="number three">40</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="number four">41</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="number five">42</span>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Size