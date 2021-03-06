import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from '../../../actions/auth';
import { RootState } from '../../../store/store';
import { useNavigate } from 'react-router-dom';


type FormData = {
    user: string
    password: string
}

export const Login = () => {
    const {auth}=useSelector((state:RootState)=>state);
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ mode: 'onBlur' });

    const onSubmit: SubmitHandler<FormData> = async ({ user, password }) => {
        dispatch(getAuth(user, password))
    }
    useEffect(()=>{
        !auth.bloqueado && navigate('/dashboard',{replace:true})
    },[auth,navigate])
    



    return (
        <main>

            <form onSubmit={handleSubmit(onSubmit)} className='login'>

                <h1 className='login__titulo'>Inicio de sesion</h1>

                <section className='login__body'>

                    <div className='login__body__item'>
                        <input type="text"
                            className='login__body__item__input'
                            placeholder='Correo@gmail.com'
                            autoComplete='off'
                            defaultValue='capacitacion@gmail.com'
                            {...register("user", {
                                required: {
                                    value: true,
                                    message: 'El correo es requerido'
                                },
                                pattern: {
                                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                    message: 'Correo invalido '
                                }
                            })}
                        />
                        {errors.user && <span className="formErrorMsg">{errors.user.message}</span>}
                    </div>

                    <div className='login__body__item'>
                        <input type="password"
                            className='login__body__item__input'
                            placeholder='Ingresa tu contrase??a'
                            defaultValue='Brunofernando123*'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'La contrase??a es requerida'
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}[^'\s]/,
                                    message: 'La contrase??a no cumple con el formato correspondiente'
                                },
                            })}
                        />
                        {errors.password && <span className="formErrorMsg">{errors.password.message}</span>}
                    </div>
                    <button type='submit' className='btn'>Login</button>
                </section>

            </form>


        </main>
    )
}
