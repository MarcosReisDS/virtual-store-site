import { FC, useEffect, useState } from "react"
import "./styles.scss"
import { useNavigate } from "react-router-dom"
import userApi from "../../shared/services/user"
import { setCookie } from "../../shared/utils/cookies"

interface ILogin { }
const Login: FC<ILogin> = () => {

    const navigate = useNavigate()
    const [account, setAccount] = useState<string>("login")
    const [user, setUser] = useState<UserType[]>([])

    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [mail, setMail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleCreateUser = () => {
        userApi.createUser(user[0]).then((data) => {
            setCookie('user', JSON.stringify({ id: data?.id, name: data?.name, mail: data?.mail }), 1)
            navigate("/inicio")
        })
    }

    const handleLogin = () => {
        userApi.login(mail, password).then((data: any) => {
            setCookie('user', JSON.stringify({ id: data?.id }), 1)
            navigate("/inicio")
        })
    }

    useEffect(() => {
        setUser([{
            profile: "https://i.pinimg.com/564x/de/c9/2e/dec92e2730c6420f8a9c7d778bacdb28.jpg",
            name,
            surname,
            mail,
            password
        }])
    }, [name, surname, mail, password])

    return (
        <div className="container-login">
            {account == "login" ?
                <>
                    <div className="container-inputs">
                        <div className="salutation">
                            Seja Bem-vindo
                        </div>
                        <div className="inputs">
                            <div className="input mail">
                                <label>Email</label>
                                <input type="email" placeholder="Seu-email@gmail.com" onChange={(e) => setMail(e.target.value)} />
                            </div>
                            <div className="input password">
                                <label>Senha</label>
                                <input type="password" placeholder="Sua senha" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="input button">
                                <button onClick={() => handleLogin()}>Entrar</button>
                                <span onClick={() => setAccount("create")}>Não tem conta? <span>Criar conta</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src="https://i.pinimg.com/564x/1f/02/e2/1f02e2f2ec6b6093581b252c8d5a9cda.jpg" alt="" />
                        <div className="shadow"></div>
                    </div>
                </>
                :
                <>
                    <div className="container-inputs">
                        <div className="salutation">
                            Seja Bem-vindo
                        </div>
                        <div className="inputs">
                            <div className="input name">
                                <label>Nome</label>
                                <input type="text" placeholder="Seu nome" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input surname">
                                <label>Sobrenome</label>
                                <input type="text" placeholder="Seu sobrenome" onChange={(e) => setSurname(e.target.value)} />
                            </div>
                            <div className="input mail">
                                <label>Email</label>
                                <input type="email" placeholder="Seu-email@gmail.com" onChange={(e) => setMail(e.target.value)} />
                            </div>
                            <div className="input password">
                                <label>Senha</label>
                                <input type="password" placeholder="Sua senha" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="input button">
                                <button onClick={() => handleCreateUser()}>Criar</button>
                                <span onClick={() => setAccount("login")}>Tem conta? <span>Entrar</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src="https://i.pinimg.com/564x/c4/78/f2/c478f227d92d0d73daee86bfd641a112.jpg" alt="" />
                        <div className="shadow"></div>
                    </div>
                </>
            }

        </div>
    )
}

export default Login