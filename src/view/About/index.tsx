import { FC } from "react"
import Footer from "../../shared/components/Footer"
import NavBar from "../../shared/components/NavBar"
import "./style/index.scss"

interface IAbout { }
const About: FC<IAbout> = () => {
    return (
        <div className="container-about">
            <NavBar />
            <div className="logo">
                <span>SOBRE NÓS</span>
                <hr />
            </div>
            <div className="body">
                <div>
                    <div>
                        <div className="tennis" />
                        <div>
                            <div className="my-photo" />
                            <p className="copy">Marcos Reis, dono da AS</p>
                        </div>
                    </div>
                    <div className="text">
                        <div>
                            <p>
                                A Terra é um dos planetas mais conhecidos no mundo..
                                Diz-me com quem andas e te direi se vou contigo..
                                O importante é o que importa.. I have a moral code,
                                but I haven't figured out how to read it yet.
                                Em rio de piranhas, jacaré nada de costas..
                            </p>
                            <p>
                                O sonho não acabou.
                                E ainda temos pão doce,
                                maria-mole e queijadinha..
                                Na vida tudo é passageiro,
                                menos o motorista e o cobrador….
                                Mais vale um pássaro na mão do que bois voando..
                                Pobre só enche a barriga quando morre afogado.. Por causa da pressa,
                                é que a mosca nasceu sem osso..
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div>

                        <div className="container-store">
                            <div className="logo-store">
                                <span>NOSSAS LOJAS</span>
                                <hr />
                            </div>
                            <div className="content-store">
                                <span>Rua Prates, 194 - bom Retiro</span>
                                <span>São Paulo - SP, 01121-000</span>
                                <span>info@meusite.com</span>
                                <span>Tel: (11) 3456-7890</span>
                            </div>
                            <div className="content-store">
                                <span>Rua Carlos Jose Angelo Berti, 34 - tupi</span>
                                <span>Praia Grande - SP, 11719-110</span>
                                <span>marcos.reis349@gmail.com</span>
                                <span>Tel: (13) 98855-3245</span>
                            </div>

                        </div>
                        <div className="container-time">
                            <div className="logo-time">
                                <span>HORÁRIOS</span>
                                <hr />
                            </div>
                            <div className="content-time">
                                <span>Segunda a sexta: 11:00 às 18:30</span>
                                <span>Sábado: 11:00 às 17:00</span>
                                <span>Domingo: 12:30 às 16:30</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                <Footer />
        </div>
    )
}

export default About