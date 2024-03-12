import { FC, useEffect, useState } from "react"
import "./styles.scss"
import { TfiClose } from "react-icons/tfi";
import userApi from "../../services/user";

interface IModalAddress {
    clickModal: (value: boolean) => void
    userId: number
}
const ModalAddress: FC<IModalAddress> = ({ clickModal, userId }) => {

    const [address, setAddresses] = useState<AddressType[]>([])

    const [zipcode, setZipcode] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [number, setNumber] = useState<string>("")

    const handleCreateAddress = () => {
        userApi.createAddress(userId, address[0]).then(() => {
            clickModal(false)
            userApi.listAddresses()
        })
    }

    useEffect(() => {
        setAddresses([{
            zipcode,
            name,
            number
        }])

    }, [zipcode, name, number])


    return (
        <div className="container-modal-address">
            <div className="modal">
                <div className="close" onClick={() => clickModal(false)}>
                    <TfiClose className="icon-close" />
                </div>
                <div className="title">
                    <p>Adicionar novo endereço</p>
                </div>
                <div className="inputs">
                    <div>
                        <label>Código Postal (CEP)</label>
                        <input type="text" onChange={(e) => setZipcode(e.target.value)} />
                    </div>
                    <div>
                        <div>
                            <label>Endereço</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Número</label>
                            <input type="text" onChange={(e) => setNumber(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={() => handleCreateAddress()}>Adicionar endereço</button>
                </div>
            </div>
        </div>
    )
}

export default ModalAddress