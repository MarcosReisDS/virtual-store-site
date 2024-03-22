import { FC, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { setCookie } from "../../shared/utils/cookies"
import Contexts, { IContext } from "../../shared/contexts"
import userApi from "../../shared/services/user"
import { IoEye, IoEyeOff } from "react-icons/io5";
import "./styles.scss"

interface ILogin { }
const Login: FC<ILogin> = () => {

    const navigate = useNavigate()
    const [account, setAccount] = useState<string>("login")
    const { users, setUsers } = useContext(Contexts) as IContext
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [mail, setMail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [eye, setEye] = useState<boolean>(false)
    // Login
    const [errorMessageMail, setErrorMessageMail] = useState<boolean>(false)
    const [errorMessagePass, setErrorMessagePass] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<boolean>(false)
    // create
    const [errorMessageName, setErrorMessageName] = useState<boolean>(false)
    const [errorMessageSurname, setErrorMessageSurname] = useState<boolean>(false)
    const [errorMessageMailC, setErrorMessageMailC] = useState<boolean>(false)
    const [errorMessagePassC, setErrorMessagePassC] = useState<boolean>(false)

    const handleSubmitLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!mail && !password) {
            setErrorMessageMail(true);
            setErrorMessagePass(true);
            return;
        } else if (!mail) {
            setErrorMessageMail(true);
            setErrorMessagePass(false);
            setErrorMessage(false)
            return;
        } else if (!password) {
            setErrorMessageMail(false);
            setErrorMessagePass(true);
            setErrorMessage(false)
            return;
        }

        userApi.login(mail, password).then((data: any) => {
            setCookie('token', JSON.stringify({ token: data?.access_token }), 1)
            navigate("/inicio")
        }).catch(() => {
            setErrorMessage(true)
            setErrorMessageMail(false);
            setErrorMessagePass(false);
        })
    };

    const handleSubmitCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name && !surname && !mail && !password) {
            setErrorMessageName(true);
            setErrorMessageSurname(true);
            setErrorMessageMailC(true);
            setErrorMessagePassC(true);
            return;
        } else if (!surname && !mail && !password) {
            setErrorMessageName(false)
            setErrorMessageSurname(true);
            setErrorMessageMailC(true);
            setErrorMessagePassC(true);
            return;
        } else if (!name && !mail && !password) {
            setErrorMessageName(true);
            setErrorMessageSurname(false)
            setErrorMessageMailC(true);
            setErrorMessagePassC(true);
            return;
        } else if (!name && !surname && !password) {
            setErrorMessageName(true);
            setErrorMessageSurname(true);
            setErrorMessageMailC(false)
            setErrorMessagePassC(true);
            return;
        } else if (!name && !surname && !mail) {
            setErrorMessageName(true);
            setErrorMessageSurname(true);
            setErrorMessageMailC(true);
            setErrorMessagePassC(false);
            return;
        } else if (!name && !surname) {
            setErrorMessageName(true);
            setErrorMessageSurname(true);
            setErrorMessageMailC(false);
            setErrorMessagePassC(false);
            return;
        } else if (!name && !mail) {
            setErrorMessageName(true);
            setErrorMessageSurname(false);
            setErrorMessageMailC(true);
            setErrorMessagePassC(false);
            return;
        } else if (!name && !password) {
            setErrorMessageName(true);
            setErrorMessageSurname(false);
            setErrorMessageMailC(false);
            setErrorMessagePassC(true);
            return;
        } else if (!surname && !mail) {
            setErrorMessageName(false);
            setErrorMessageSurname(true);
            setErrorMessageMailC(true);
            setErrorMessagePassC(false);
            return;
        } else if (!surname && !password) {
            setErrorMessageName(false);
            setErrorMessageSurname(true);
            setErrorMessageMailC(false);
            setErrorMessagePassC(true);
            return;
        } else if (!mail && !password) {
            setErrorMessageName(false);
            setErrorMessageSurname(false);
            setErrorMessageMailC(true);
            setErrorMessagePassC(true);
            return;
        } else if (!name) {
            setErrorMessageName(true);
            setErrorMessageSurname(false);
            setErrorMessageMailC(false);
            setErrorMessagePassC(false);
            return;
        } else if (!surname) {
            setErrorMessageName(false);
            setErrorMessageSurname(true);
            setErrorMessageMailC(false);
            setErrorMessagePassC(false);
            return;
        } else if (!mail) {
            setErrorMessageName(false);
            setErrorMessageSurname(false);
            setErrorMessageMailC(true);
            setErrorMessagePassC(false);
            return;
        } else if (!password) {
            setErrorMessageName(false);
            setErrorMessageSurname(false);
            setErrorMessageMailC(false);
            setErrorMessagePassC(true);
            return;
        }

        await userApi.createUser(users[0])

        userApi.login(mail, password).then((data: any) => {
            setCookie('token', JSON.stringify({ token: data?.access_token }), 1)
            navigate("/inicio")
        })
    };

    useEffect(() => {
        setUsers([{
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
                    <div className="container inputs">
                        <h3 className="salutation">
                            Seja Bem-vindo
                        </h3>
                        <form className="inputs" onSubmit={(e) => handleSubmitLogin(e)}>
                            <div className="input mail">
                                <label htmlFor="mail">Email</label>
                                <input type="email" placeholder="Seu-email@gmail.com" onChange={(e) => setMail(e.target.value)} />
                                {errorMessageMail ? <span className="error">Preencha esse campo</span> : ""}
                            </div>
                            <div className="input password">
                                <label htmlFor="password">Senha</label>
                                <input type={eye ? "text" : "password"} placeholder="Sua-senha" onChange={(e) => setPassword(e.target.value)} />
                                {errorMessagePass ? <span className="error">Preencha esse campo</span> : ""}
                                <div className="container-eye" onClick={() => setEye(!eye)}>
                                    {eye ?
                                        <IoEye />
                                        :
                                        <IoEyeOff />
                                    }
                                </div>
                            </div>
                            <div className="input button">
                                {errorMessage ? <span className="error master">E-mail ou a senha estão incorretos</span> : ""}
                                <button onClick={(e) => handleSubmitLogin(e)}>Entrar</button>
                                <span onClick={() => setAccount("create")}>Não tem conta? <span>Criar conta</span></span>
                            </div>
                        </form>
                    </div>
                    <div className="container img">
                        <img src="https://i.pinimg.com/564x/1f/02/e2/1f02e2f2ec6b6093581b252c8d5a9cda.jpg" alt="" />
                        <div className="shadow"></div>
                    </div>
                </>
                :
                <>
                    <div className="container inputs mobile">
                        <h3 className="salutation mobile">
                            Seja Bem-vindo
                        </h3>
                        <form className="inputs" onSubmit={(e) => handleSubmitCreate(e)}>
                            <div className="input name">
                                <label>Nome</label>
                                <input type="text" placeholder="Seu-nome" onChange={(e) => setName(e.target.value)} />
                                {errorMessageName ? <span className="error">Preencha esse campo</span> : ""}
                            </div>
                            <div className="input surname">
                                <label>Sobrenome</label>
                                <input type="text" placeholder="Seu-sobrenome" onChange={(e) => setSurname(e.target.value)} />
                                {errorMessageSurname ? <span className="error">Preencha esse campo</span> : ""}
                            </div>
                            <div className="input mail">
                                <label>Email</label>
                                <input type="email" placeholder="Seu-email@gmail.com" onChange={(e) => setMail(e.target.value)} />
                                {errorMessageMailC ? <span className="error">Preencha esse campo</span> : ""}
                            </div>
                            <div className="input password">
                                <label>Senha</label>
                                <input type={eye ? "text" : "password"} placeholder="Sua-senha" onChange={(e) => setPassword(e.target.value)} />
                                {errorMessagePassC ? <span className="error">Preencha esse campo</span> : ""}
                                <div className="container-eye" onClick={() => setEye(!eye)}>
                                    {eye ?
                                        <IoEye />
                                        :
                                        <IoEyeOff />
                                    }
                                </div>
                            </div>
                            <div className="input button">
                                <button onClick={(e) => handleSubmitCreate(e)}>Criar</button>
                                <span onClick={() => setAccount("login")}>Tem conta? <span>Entrar</span></span>
                            </div>
                        </form>
                    </div>
                    <div className="container img">
                        <img src="https://i.pinimg.com/564x/c4/78/f2/c478f227d92d0d73daee86bfd641a112.jpg" alt="" />
                        <div className="shadow"></div>
                    </div>
                </>
            }

        </div>
    )
}

export default Login