import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ObjectValue } from '../domain/interface';
import { getInfoPropById } from '../infrastructure/getInfoPropById';
import { editProp } from '../infrastructure/editProp';
import Swal from 'sweetalert2';



type Params = {
    id: string
}

type FormData = {
    nombre: string | undefined
    descripcion: string | undefined,
    idBanco: number | undefined | null,
    valor: string | undefined,
    estado: number | undefined
}



export const EditProp = () => {

    const { id: IDPropiedades } = useParams<Params>();
    const dispatch = useDispatch();
    const [prop, setProp] = useState<ObjectValue>()
    const Since = prop?.DataBeanProperties.Since;


    useEffect(() => {
        getInfoPropById(IDPropiedades).then(resp => setProp(resp))
    }, [IDPropiedades])


    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ mode: 'onBlur' });

    const onSubmit: SubmitHandler<FormData> = async (changes) => {

        const body = {
            Nombre: changes.nombre !== "" ? changes.nombre : prop?.DataBeanProperties.Nombre,
            Descripcion: changes.descripcion !== "" ? changes.descripcion : prop?.DataBeanProperties.Descripcion,
            Valor: changes.valor !== "" ? changes.valor : prop?.DataBeanProperties.Valor,
            Estado: changes.estado !== 0 ? changes.estado : prop?.DataBeanProperties.Estado,
            IDPerfilBanco: changes.idBanco !== 0 ? changes.idBanco : prop?.DataBeanProperties.IDPerfilBanco,
            IDPropiedades,
            Since
        }

        editProp(body)

        Swal.fire('Cambios Realizados')
        reset()
    }
    return (
        <main className='info'>

            <form className='info__container'
                onSubmit={handleSubmit(onSubmit)}
            >

                <h3 className='edit__titulo'>Nombre :</h3>
                <input type="text"
                    className='edit__input'
                    autoComplete='off'
                    id='nombre'
                    {...register('nombre')}
                />

                <h3 className='edit__titulo'>Descripcion :</h3>
                <input type='text'
                    className='edit__input'
                    autoComplete='off'
                    {...register('descripcion')}
                />

                <h3 className='edit__titulo'>Id perfil de banco :</h3>
                <input type="text"
                    className='edit__input'
                    autoComplete='off'
                    {...register('idBanco')}
                />

                <h3 className='edit__titulo'>Valor :</h3>
                <input type="text"
                    className='edit__input'
                    autoComplete='off'
                    {...register('valor')}
                />

                <h3 className='edit__titulo'>Estado :</h3>
                <input type="text"
                    className='edit__input'
                    autoComplete='off'
                    {...register('estado')}
                />

                <button className='btn btn--edit btn--form'>Guardar cambios</button>

            </form>
        </main>
    )
}
