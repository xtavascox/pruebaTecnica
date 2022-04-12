import { useForm, SubmitHandler } from "react-hook-form";

import { loginAuth } from '../infrastructure/loginInfra';

type FormData = {
    user: string
    password: string
}

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ mode: 'onBlur' })
    const onSubmit: SubmitHandler<FormData> = async ({ user, password }) => {
        const access = await loginAuth({ user, password });
        console.log(access.DataBeanProperties.ObjectValue.DataBeanProperties.msg);
    }

    return (
        <main>

            <form onSubmit={handleSubmit(onSubmit)} className='login'>

                <h1 className='login__titulo'>Inicio de sesion</h1>

                <section className='login__body'>

                    <div className='login__body__item'>
                        <input type="text"
                            className='login__body__item__input'
                            placeholder='Ingresa tu correo'
                            autoComplete='off'
                            {...register("user", {
                                required: {
                                    value: true,
                                    message: 'El correo es requerido'
                                },
                                pattern: {
                                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                    message: 'Debe ingresar un correo electronico valido. Ejemplo: Correo@email.com'
                                }
                            })}
                        />
                        {errors.user && <span>{errors.user.message}</span>}
                    </div>

                    <div className='login__body__item'>
                        <input type="password"
                            className='login__body__item__input'
                            placeholder='Ingresa tu contraseña'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'La contraseña es requerida'
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}[^'\s]/,
                                    message: `Contraseña Incorrencta:
                -Minimo 8 caracteres
                -Al menos una letra mayúscula
                -Al menos una letra minucula
                -Al menos un dígito
                -No espacios en blanco
                -Al menos 1 caracter especial`
                                },
                            })}
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                </section>

                <button type='submit' className='btn btn--primay'>Login</button>
            </form>


        </main>
    )
}
