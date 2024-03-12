import { FC, useContext, useEffect, useState } from "react";
import "./styles.scss"
import userApi from "../../shared/services/user";
import { useNavigate } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import ModalAddress from "../../shared/components/ModalAddress";
import ModalWallet from "../../shared/components/ModalWallet";
import Footer from "../../shared/components/Footer";
import Contexts, { IContext } from "../../shared/contexts";
import { getCookie } from "../../shared/utils/cookies";

interface IProfile { }
const Profile: FC<IProfile> = () => {

    const navigate = useNavigate()
    const [addresses, setAddresses] = useState<AddressType[]>([])
    const [wallets, setWallets] = useState<WalletType[]>([])
    const [editPhoto, setEditPhoto] = useState<boolean>(false)
    const [editName, setEditName] = useState<boolean>(true)
    const [modalAddress, setModalAddress] = useState<boolean>(false)
    const [modalWallet, setModalWallet] = useState<boolean>(false)
    const [userId, setUserId] = useState<any>(0)

    const { user, setUser } = useContext(Contexts) as IContext

    const navi = [
        { navi: "Meus endereços", url: "/perfil/enderecos" },
        { navi: "Minha carteira", url: "/perfil/carteira" },
        { navi: "Minha conta", url: "/perfil" },
    ]

    const viewUser = () => {
        userApi.listUser(getCookie("user").id).then((data: any) => {
            setUser({
                id: data?.id,
                profile: data?.profile,
                name: data?.name,
                surname: data?.surname,
                mail: data?.mail,
                password: data?.password,
            })
        })
    }

    const handleUpdate = () => {
        userApi.updateUser(user)
    }

    useEffect(() => {
        viewUser()
        userApi.listAddresses().then((data: any) => {
            setAddresses(data)
        })
        userApi.listWallets().then((data: any) => {
            setWallets(data)
        })
    }, [])

    return (
        <div className="container-profile">
            <div className="navi-profile">
                <div className="container-navi">
                    <div className={editPhoto ? "profile edit" : "profile"}>
                        <div className={editPhoto ? "img edit" : "img"}>
                            {editPhoto ?
                                <div className="input">
                                    <input type="url" placeholder="Insira a url da imagem" onChange={(e) => setUser(({ ...user, profile: e.target.value }))} />
                                    <div>
                                        <button onClick={() => { viewUser(); setEditPhoto(false) }}>Cancelar</button>
                                        <button onClick={() => { handleUpdate(); setEditPhoto(false) }}>Mudar</button>
                                    </div>
                                </div>
                                :
                                ""
                            }
                            <img src={user.profile} alt="Foto de perfil" />
                            <div className="shadow" onClick={() => setEditPhoto(true)}>
                                <div>
                                    <CiCamera />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>{user.name}</p>
                            <p>{user.surname}</p>
                        </div>
                    </div>
                    <div className="navi">
                        <ul>
                            {navi.map((navi, index) => (
                                <li
                                    className={window.location.pathname == navi.url ? "selected" : ""}
                                    key={index}
                                    onClick={() => navigate(navi.url)}
                                ><a>{navi.navi}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="datas">
                    {window.location.pathname == navi[0].url ?
                        <div className="my-addresses">
                            <div className="title">
                                <p>Meus Endereços</p>
                                <p>Adicione e gerencie os endereços que você usa com frequência.</p>
                            </div>
                            <div className="addresses">

                                {addresses.map((address, index) => (
                                    address.userId == user.id ?
                                        <div className="values" key={index}>
                                            <p>{address.zipcode}</p>
                                            <div>
                                                <p>{address.name},</p>
                                                <p>{address.number}</p>
                                            </div>
                                        </div>
                                        :
                                        ""
                                ))}
                                {addresses.length == 0 ? <p>Você ainda não salvou nenhum endereço.</p> : ""}
                                <button onClick={() => { setModalAddress(true); setUserId(user.id) }}>Adicionar novo endereço</button>
                                {modalAddress ?
                                    <ModalAddress clickModal={() => setModalAddress(false)} userId={userId} />
                                    :
                                    ""
                                }
                            </div>
                        </div>
                        :
                        window.location.pathname == navi[1].url ?
                            <div className="my-wallet">
                                <div className="title">
                                    <p>Minha Carteira</p>
                                    <p>Salve as informações do cartão de crédito e débito para o checkout ser mais rápido.</p>
                                </div>
                                <div className="wallet">
                                    {wallets.map((wallet, index) => (
                                        <div className="values" key={index}>
                                            <p>{wallet.number}</p>
                                            <p>{wallet.security}</p>
                                            <p>{wallet.name}</p>
                                            <p>{wallet.date}</p>
                                        </div>
                                    ))}
                                    <button onClick={() => { setModalWallet(true); setUserId(user.id) }}>Adicionar novo cartão</button>
                                    {modalWallet ?
                                        <ModalWallet clickModal={() => setModalWallet(false)} userId={userId} />
                                        :
                                        ""
                                    }
                                </div>
                            </div>
                            :
                            <div className="my-account">
                                <div className="title">
                                    <p>Minha Conta</p>
                                    <p>Veja e edite suas informações pessoais abaixo.</p>
                                </div>
                                <div className="account">
                                    <div>
                                        <p>Conta</p>
                                        <p>Atualize suas informações pessoais.</p>
                                    </div>
                                    <div>
                                        <p>Email de login:</p>
                                        <p>{user.mail}</p>
                                        <p>Seu email de login não pode ser alterado.</p>
                                    </div>
                                    <div>
                                        <div>
                                            <label>Nome</label>
                                            <input
                                                value={user.name}
                                                type="text"
                                                disabled={editName}
                                                onChange={(e) => setUser(({ ...user, name: e.target.value }))}
                                            />
                                        </div>
                                        <div>
                                            <label>Sobrenome</label>
                                            <input
                                                value={user.surname}
                                                type="text"
                                                disabled={editName}
                                                onChange={(e) => setUser(({ ...user, surname: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        {editName ?
                                            <button onClick={() => setEditName(false)}>Editar</button>
                                            :
                                            <>
                                                <button onClick={() => { viewUser(); setEditName(true) }}>Descartar</button>
                                                <button onClick={() => { handleUpdate(); setEditName(true) }}>Atualizar</button>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile