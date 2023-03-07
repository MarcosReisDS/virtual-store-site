import { FC, useEffect, useRef, useState } from "react"
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai"
import Color from "./Color"
import Price from "./Price"
import Size from "./Size"
import "./style/index.scss"

interface IFilterMasculine { }
const FilterMasculine: FC<IFilterMasculine> = () => {
    return (
        <div className="container-filter">
            <div className="filter">
                <span className="name">Filtrar por</span>
                <hr />
            </div>

            <Price />
            <Color />
            <Size />
        </div>
    )
}

export default FilterMasculine