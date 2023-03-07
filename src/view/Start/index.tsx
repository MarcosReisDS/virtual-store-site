import { FC } from "react";
import { useNavigate } from "react-router-dom";
import AnimationTennis from "../../shared/components/AnimationTennis";
import Footer from "../../shared/components/Footer";
import NavBar from "../../shared/components/NavBar"
import "./style/index.scss"


interface IStart { }
const Start: FC<IStart> = () => {

    const navigate = useNavigate()

    return (
        <div className="container-start">
            <NavBar />

            <div className="foto">
                <div className="container-foto">
                    <div className="foto-tenis" />
                </div>
                <div className="container-informs">
                    <div className="container-quite">
                        <span className="as">as</span>
                        <hr className="line" />
                        <span className="name">ATUAL SNEAKERS</span>
                        <button className="button-buy" onClick={() => navigate("/loja/feminino")}>COMPRAR</button>
                    </div>
                </div>
                <div className="container-man-woman">
                    <div onClick={() => navigate("/loja/masculino")}>
                        <img className="box-image man"/>
                        <div className="tranparent">
                            <span className="collection">COLEÇÃO MASCULINA</span>
                        </div>
                    </div>
                    <div  onClick={() => navigate("/loja/feminino")}>
                        <img className="box-image woman" />
                        <div className="tranparent">
                            <span className="collection">COLEÇÃO FEMININA</span>
                        </div>
                    </div>
                </div>

                <AnimationTennis />

                <div className="several-tennis">
                    <div className="container-tenis">
                        <div className="tennis">
                            <div className="tenis one" />
                            <div className="tenis two" />
                            <div className="tenis three" />
                        </div>
                    </div>
                    <div className="container-tenis">
                        <div className="tennis">
                            <div className="tenis four" />
                            <div className="tenis five" />
                            <div className="tenis six" />
                        </div>
                    </div>
                </div>
                <div className="logo-big">
                    <span>as</span>
                    <hr />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Start