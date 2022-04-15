
import { useForm, SubmitHandler } from 'react-hook-form';
import { createProp } from '../infrastructure/createProp'
import { useDispatch } from 'react-redux';
import { createPropRedux } from '../../../actions/update';
type FormData = {
    nombre: string | undefined
    descripcion: string | undefined,
    idBanco: number | undefined | null,
    valor: string | undefined,
    estado: number | undefined
}


export const CreateProp = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (changes) => {

        const body = {
            Nombre: changes.nombre,
            Descripcion: changes.descripcion,
            Valor: changes.valor,
            Estado: changes.estado,
            IDPerfilBanco: changes.idBanco,
            IDPropiedades: null,
            Since: null
        };
        dispatch(createPropRedux(body));
        reset();
    }
    return (
        <form className='createProp'
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2>Crear propiedad</h2>

            <input type="text"
                placeholder='Nombre'
                className='createProp__input'
                autoComplete='off'
                {...register('nombre')}
            />
            <input type="text"
                placeholder='Descripcion'
                className='createProp__input'
                autoComplete='off'
                {...register('descripcion')}
            />
            <input type="text"
                placeholder='Valor'
                className='createProp__input'
                autoComplete='off'
                {...register('valor')}
            />
            <input type="text"
                placeholder='Estado'
                className='createProp__input'
                autoComplete='off'
                {...register('estado')}
            />
            <input type="text"
                placeholder='IdBanco'
                className='createProp__input'
                autoComplete='off'
                {...register('idBanco')}
            />

            <button className='btn btn--form'>Crear</button>
        </form>
    )
}
