import { FC } from "react";
import "./styles.scss"
import Footer from "../../shared/components/Footer";

interface IService { }
const Service: FC<IService> = () => {
    return (
        <div className="container-service">
            <div className="header">
                <p>ATENDIMENTO AO CLIENTE</p>
                <span />
            </div>
            <div className="body">
                <div className="speak">
                    <img src="https://i.ibb.co/DggCzhx/skate.webp" alt="" />
                    <div className="box">
                        <div className="top">
                            <p>FALE CONOSCO</p>
                            <span />
                        </div>
                        <div>
                            <p>Tem perguntas?</p>
                        </div>
                        <div>
                            <p>Talvez as respostas estejam em FAQ.</p>
                            <p>Procuramos abordar tudo o que você precisa saber.</p>
                        </div>
                        <div>
                            <p>Você também pode enviar emails para info@meusite.com</p>
                            <p>ou preencher o formulário de contato:</p>
                        </div>
                        <div className="inputs">
                            <div>
                                <input type="text" placeholder="Nome" />
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Telefone" />
                            </div>
                            <div>
                                <textarea placeholder="Insira sua mensagem aqui"></textarea>
                            </div>
                        </div>
                        <div className="button">
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
                <div className="header-faq">
                    <p>FAQ</p>
                    <span />
                </div>
                <div className="faq">
                    <div className="content">
                        <div>
                            <p>01</p>
                        </div>
                        <div>
                            <p>Não consigo selecionar o tamanho do tênis que eu quero</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>02</p>
                        </div>
                        <div>
                            <p>Vocês poderiam me fornecer mais informações sobre os tênis da marca?</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>03</p>
                        </div>
                        <div>
                            <p>Meu pedido já foi enviado?</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>04</p>
                        </div>
                        <div>
                            <p>Posso rastrear meu pedido?</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>05</p>
                        </div>
                        <div>
                            <p>Meu pedido veio incompleto</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>06</p>
                        </div>
                        <div>
                            <p>A loja me enviou itens errados</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>07</p>
                        </div>
                        <div>
                            <p>Quais métodos de pagamento posso usar?</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>08</p>
                        </div>
                        <div>
                            <p>Esqueci do código de desconto</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>09</p>
                        </div>
                        <div>
                            <p>É seguro comprar online?</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>10</p>
                        </div>
                        <div>
                            <p>Entrega - Quanto custa e quanto tempo leva?</p>
                        </div>
                        <div>
                            <p>Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em "Editar texto" ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história para os visitantes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Service