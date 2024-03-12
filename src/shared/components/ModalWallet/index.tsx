import { FC, useEffect, useState } from "react"
import "./styles.scss"
import { TfiClose } from "react-icons/tfi";
import userApi from "../../services/user";
import "./styles.scss"

interface IModalWallet {
    clickModal: (value: boolean) => void
    userId: number
}
const ModalWallet: FC<IModalWallet> = ({ clickModal, userId }) => {

    const [wallet, setWallet] = useState<WalletType[]>([])


    return (
        <div className="container-modal-wallet">
            <div className="modal">
                <div className="close" onClick={() => clickModal(false)}>
                    <TfiClose className="icon-close" />
                </div>
                <div className="title">
                    <p>Adicionar novo cartão</p>
                </div>
                <div className="inputs">
                    <div>
                        <div>
                            <label>Número do cartão</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Segurança</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <label>Nome</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="buttons">
                    <button>Adicionar cartão</button>
                </div>
            </div>
        </div>
    )
}

export default ModalWallet