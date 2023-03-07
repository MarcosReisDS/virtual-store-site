import { FC } from "react"
import Footer from "../../shared/components/Footer"
import NavBar from "../../shared/components/NavBar"
import "./style/index.scss"

interface IService { }
const Service: FC<IService> = () => {
    return (
        <div className="container-service">
            <NavBar />
            <div className="logo">
                <span>ATENDIMENTO AO CLIENTE</span>
                <hr />
            </div>
            <div className="body">
                <div className="photo" />
                <div className="content-photo">
                    <div className="logo">
                        <span>FALE CONOSCO</span>
                        <hr />
                    </div>
                    <div className="container">
                        <p className="p">Tem perguntas?</p>
                        <p className="p">Talvez as respostas estejam em FAQ.</p>
                        <p className="p cima">Procuramos abordar tudo o que você precisa saber.</p>
                        <p className="p">Você também pode enviar emails para info@meusite.com</p>
                        <p className="p baixo">ou preencher o formulário de contato:</p>
                    </div>
                    <div className="container-input">
                        <div>
                            <input type="text" placeholder="Nome" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Telefone" />
                        </div>
                        <div>
                            <textarea placeholder="Insira sua mensagem aqui"></textarea>
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo-faq">
                <span>FAQ</span>
                <hr />
            </div>
            <div className="body-faq">
                <div>
                    <h2>01</h2>
                    <p>Não consigo selecionar o tamanho do tênis que eu quero</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
                <div>
                    <h2>02</h2>
                    <p>Vocês poderiam me fornecer mais informações sobre os tênis da marca?</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
                <div>
                    <h2>03</h2>
                    <p>Meu pedido já foi enviado?</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
                <div>
                    <h2>04</h2>
                    <p>Posso rastrear meu pedido?</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
                <div>
                    <h2>05</h2>
                    <p>Meu pedido veio incompleto</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
                <div>
                    <h2>06</h2>
                    <p>A loja me enviou itens errados</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
                <div>
                    <h2>07</h2>
                    <p>Quais métodos de pagamento posso usar?</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
                <div>
                    <h2>08</h2>
                    <p>Esqueci do código de desconto</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
                <div>
                    <h2>09</h2>
                    <p>É seguro comprar online?</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
                <div>
                    <h2>10</h2>
                    <p>Entrega - Quanto custa e quanto tempo leva?</p>
                    <p>
                        Alguma vez você já deve ter tentado calçar um sapato que era muito
                        pequeno ou muito grande para seu pé.
                        Isso não é legal e você pode até se machucar.
                        Saber o número exato do tamanho do seu sapato é essencial para comprar calçados.
                        Sabendo seu número,
                        você consegue agilizar suas compras e focar naquilo que realmente importa.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Service