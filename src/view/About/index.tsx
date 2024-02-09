import { FC } from "react";
import "./styles.scss"
import Footer from "../../shared/components/Footer";

interface IAbout { }
const About: FC<IAbout> = () => {
    return (
        <div className="container-about">
            <div className="header">
                <p>SOBRE NÓS</p>
                <span />
            </div>
            <div className="body">
                <div className="you">
                    <div>
                        <img src="https://i.ibb.co/YXFv7tJ/teste.webp" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/DgXmD3j/pararrrr.webp" alt="" />
                        <div>
                            <p>Theo Souza, dono da AS</p>
                        </div>
                    </div>
                    <div className="title">
                        <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        <p>Use este espaço para escrever um texto longo sobre sua empresa e sobre os serviços que você oferece. Conte aos visitantes a história de como você teve a ideia de criar essa empresa e o que o torna diferente de seus concorrentes. Você pode apresentar a sua equipe, seus projetos e metas. Faça com que a sua empresa se destaque e mostre aos visitantes quem você é. Clique em "Editar texto" para começar.</p>
                    </div>
                </div>
                <div className="local-hours">
                    <div className="local">
                        <div className="header">
                            <p>NOSSAS LOJAS</p>
                            <span />
                        </div>
                        <div>
                            <p>Rua Prates, 194 - Bom Retiro</p>
                            <p>São Paulo - SP, 01121-000</p>
                            <p>info@meusite.com</p>
                            <p>Tel.: (11) 3456-7890</p>
                        </div>
                        <div>
                            <p>Rua Prates, 194 - Bom Retiro</p>
                            <p>São Paulo - SP, 01121-000</p>
                            <p>info@meusite.com</p>
                            <p>Tel.: (11) 3456-7890</p>
                        </div>
                    </div>
                    <div className="hours">
                        <div className="header">
                            <p>HORÁRIOS</p>
                            <span />
                        </div>
                        <div>
                            <p>Segunda a sexta: 11:00 às 18:30</p>
                            <p>Sábado: 11:00 às 17:00</p>
                            <p>Domingo: 12:30 às 16:30 </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About