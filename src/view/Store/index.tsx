import { FC, useState } from "react"
import FilterMasculine from "../../shared/components/FilterMasculine";
import Footer from "../../shared/components/Footer";
import NavBar from "../../shared/components/NavBar";
import Select from "../../shared/components/Select";
import "./style/index.scss"

interface IStore {
    theme?: "feminino" | "masculino";
}

const Store: FC<IStore> = ({ theme = "masculino" }) => {

    const isMasculino = theme === "masculino"

    const [imgOne, setImgOne] = useState<number | null>(null)

    const dbImagesUrl = {
        img_0: [
            "https://static.wixstatic.com/media/84770f_b7ca271b595d4fd3b1392f58c9ccd132.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_b7ca271b595d4fd3b1392f58c9ccd132.png",
            "https://static.wixstatic.com/media/84770f_0efc570791e74a4b8b74752e7c68a6e2.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_0efc570791e74a4b8b74752e7c68a6e2.png",
        ],

        img_2: [
            "https://static.wixstatic.com/media/84770f_fe645b9caa874735ad2b817f5ee77551.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_fe645b9caa874735ad2b817f5ee77551.png",
            "https://static.wixstatic.com/media/84770f_6f14dc84f58f4dc69a5f4c35a5121abe.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6f14dc84f58f4dc69a5f4c35a5121abe.png",
        ],

        img_4: [
            "https://static.wixstatic.com/media/84770f_054990a92c9e4b28bcc929a20b034302.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_054990a92c9e4b28bcc929a20b034302.png",
            "https://static.wixstatic.com/media/84770f_25901235b5dd49fe84cee6bc9fac6ed3.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_25901235b5dd49fe84cee6bc9fac6ed3.png",
        ],

        img_6: [
            "https://static.wixstatic.com/media/84770f_34b3ec23703b4f81949beb153c0fba09.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_34b3ec23703b4f81949beb153c0fba09.png",
            "https://static.wixstatic.com/media/84770f_90cab23717714f8c8fd317abaa7122d7.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_90cab23717714f8c8fd317abaa7122d7.png",
        ],

        img_8: [
            "https://static.wixstatic.com/media/84770f_fa88211e6c0b46a88bfed4757177592e.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_fa88211e6c0b46a88bfed4757177592e.png",
            "https://static.wixstatic.com/media/84770f_6e082af66c04451993f51837a161c158.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6e082af66c04451993f51837a161c158.png",
        ],

        img_10: [
            "https://static.wixstatic.com/media/84770f_deb028dbaa0944aabb8ddd538d2ed598.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_deb028dbaa0944aabb8ddd538d2ed598.png",
            "https://static.wixstatic.com/media/84770f_7664ef5eb88f47a5bef984ab4815e66c.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_7664ef5eb88f47a5bef984ab4815e66c.png",
        ],

        img_12: [
            "https://static.wixstatic.com/media/84770f_8cff0379580d4a318a7a30aeac659c0e.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_8cff0379580d4a318a7a30aeac659c0e.png",
            "https://static.wixstatic.com/media/84770f_8c55241f4ad642f5a433b35d757b4352.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_8c55241f4ad642f5a433b35d757b4352.png",
        ],

        img_14: [
            "https://static.wixstatic.com/media/84770f_3f459f27660348d0856f10d095042a04.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3f459f27660348d0856f10d095042a04.png",
            "https://static.wixstatic.com/media/84770f_c997d2ccd09549cc99ed3f63ae8fc26d.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_c997d2ccd09549cc99ed3f63ae8fc26d.png",
        ],

        img_16: [
            "https://static.wixstatic.com/media/84770f_93650946226a4aa29de479d16695a72f.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_93650946226a4aa29de479d16695a72f.png",
            "https://static.wixstatic.com/media/84770f_9e3d7216e3d94d489d6aab2b7f8ca83a.png/v1/fill/w_351,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_9e3d7216e3d94d489d6aab2b7f8ca83a.png",
        ]
    }



    return (

        <div className="container-masculine">

            <NavBar />
            <div className="logo">
                <span>{isMasculino ? "TÊNIS MASCULINOS" : "TÊNIS FEMININOS"}</span>
                <hr />
            </div>
            <div className="home">
                <div className="container-filter">

                <FilterMasculine />
                </div>
                <div>

                    <Select />
                    <div className="imagens">
                        {Object.keys(isMasculino ? dbImagesUrl : {})?.map((item: string, index) => (
                            <div key={index} onMouseOver={() => setImgOne(index)} onMouseOut={() => setImgOne(null)}>
                                <div className="container-image">
                                    {/* @ts-ignore */}
                                    <img className="img" src={dbImagesUrl[item][imgOne === index ? 1 : 0]} />
                                    <button className="fast" >Visualização rápida</button>
                                </div>
                                <span className="description">Sou um produto</span>
                                <span className="price">R$ 220,00</span>
                                <button className="cart true">Adicionar ao carrinho</button>
                            </div>
                        ))}
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Store