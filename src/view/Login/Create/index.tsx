import { FC, useState } from "react"
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import "../styles.scss"
import userApi from "../../../shared/services/user";
import { setCookie } from "../../../shared/utils/cookies";

const createSchema = z.object({
    name: z.string()
        .nonempty({
            message: 'O nome é obrigatório',
        }),
    surname: z.string()
        .nonempty({
            message: 'O sobrenome é obrigatório',
        }),
    mail: z.string()
        .nonempty({
            message: 'O e-mail é obrigatório',
        })
        .email({
            message: 'Formato de e-mail inválido',
        }),
    password: z.string().nonempty({
        message: 'A senha é obrigatória',
    })
        .min(6, {
            message: 'A senha precisa ter no mínimo 6 caracteres',
        })
        .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            'Deve conter pelo menos um caractere especial e uma letra maiúscula'
        ),
})

type createData = z.infer<typeof createSchema>

interface ICreate { }
const Create: FC<ICreate> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<createData>({
        resolver: zodResolver(createSchema)
    })

    const navigate = useNavigate()
    const [eye, setEye] = useState<boolean>(false)

    const handleSubmitCreate = async (data: createData) => {

        await userApi.createUser({
            profile: "https://i.pinimg.com/564x/de/c9/2e/dec92e2730c6420f8a9c7d778bacdb28.jpg",
            name: data.name,
            surname: data.surname,
            mail: data.mail,
            password: data.password
        })
            .then(() => {
                userApi.login(data.mail, data.password).then((data: any) => {
                    setCookie('token', JSON.stringify({ token: data?.access_token }), 1)
                    navigate("/inicio")
                })
            })
            .catch(() => {
                setError('mail', { message: 'Esse e-mail já existe' })
            })
    };

    return (
        <div className="container-login">
            <div className="container inputs mobile">
                <h3 className="salutation mobile">
                    Seja Bem-vindo
                </h3>
                <form className="inputs" onSubmit={handleSubmit(handleSubmitCreate)}>
                    <div className="input name">
                        <label>Nome</label>
                        <input type="text" placeholder="Seu-nome" {...register("name")} />
                        {errors.name && <span className='error'>{errors.name.message}</span>}
                    </div>
                    <div className="input surname">
                        <label>Sobrenome</label>
                        <input type="text" placeholder="Seu-sobrenome" {...register("surname")} />
                        {errors.surname && <span className='error'>{errors.surname.message}</span>}
                    </div>
                    <div className="input mail">
                        <label>Email</label>
                        <input type="email" placeholder="Seu-email@gmail.com" {...register("mail")} />
                        {errors.mail && <span className='error'>{errors.mail.message}</span>}
                    </div>
                    <div className="input password">
                        <label>Senha</label>
                        <input type={eye ? "text" : "password"} placeholder="Sua-senha" {...register("password")} />
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
                        <button type="submit">Criar</button>
                        <span onClick={() => navigate("/entrar")}>Tem conta? <span>Entrar</span></span>
                    </div>
                </form>
            </div>
            <div className="container img">
                <img src="https://i.pinimg.com/564x/c4/78/f2/c478f227d92d0d73daee86bfd641a112.jpg" alt="" />
                <div className="shadow"></div>
            </div>
        </div>
    )
}

export default Create