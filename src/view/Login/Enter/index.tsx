import { FC, useState } from "react"
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import "../styles.scss"
import userApi from "../../../shared/services/user";
import { setCookie } from "../../../shared/utils/cookies";

const loginSchema = z.object({
    mail: z.string()
        .nonempty({
            message: 'O e-mail é obrigatório',
        })
        .email({
            message: 'Formato de e-mail inválido',
        }),
    password: z.string().nonempty({
        message: 'A senha é obrigatória',
    }).min(6, {
        message: 'A senha precisa ter no mínimo 6 caracteres',
    }),
})

type loginData = z.infer<typeof loginSchema>

interface IEnter {}
const Enter: FC<IEnter> = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<loginData>({
        resolver: zodResolver(loginSchema)
    })

    const navigate = useNavigate()
    const [eye, setEye] = useState<boolean>(false)

    const handleSubmitLogin = (data: loginData) => {
        userApi.login(data.mail, data.password).then((data: any) => {
            setCookie('token', JSON.stringify({ token: data?.access_token }), 1)
            navigate("/inicio")
        }).catch(() => {
            setError('mail', { message: 'E-mail ou a senha estão incorretos' })
            setError('password', { message: 'E-mail ou a senha estão incorretos' })
        })
    };

    return (
        <div className="container-login">
            <div className="container inputs">
                <h3 className="salutation">
                    Seja Bem-vindo
                </h3>
                <form className="inputs" onSubmit={handleSubmit(handleSubmitLogin)}>
                    <div className="input mail">
                        <label htmlFor="mail">Email</label>
                        <input
                            type="email"
                            placeholder="Seu-email@gmail.com"
                            {...register("mail")}
                        />
                        {errors.mail && <span className='error'>{errors.mail.message}</span>}
                    </div>
                    <div className="input password">
                        <label htmlFor="password">Senha</label>
                        <input
                            type={eye ? "text" : "password"}
                            placeholder="Sua-senha"
                            {...register("password")}
                        />
                        <div className="container-eye" onClick={() => setEye(!eye)}>
                            {eye ?
                                <IoEye />
                                :
                                <IoEyeOff />
                            }
                        </div>
                        {errors.password && <span className='error'>{errors.password.message}</span>}
                    </div>
                    <div className="input button">
                        <button type="submit">Entrar</button>
                        <span onClick={() => navigate("/criar")}>Não tem conta? <span>Criar conta</span></span>
                    </div>
                </form>
            </div>
            <div className="container img">
                <img src="https://i.pinimg.com/564x/1f/02/e2/1f02e2f2ec6b6093581b252c8d5a9cda.jpg" alt="" />
                <div className="shadow"></div>
            </div>
        </div>
    )
}

export default Enter