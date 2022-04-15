import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import look from "../../../assets/search_black_24dp.svg";
import edit from "../../../assets/edit_black_24dp.svg";
import garbage from '../../../assets/delete_black_24dp.svg'

interface Props {
    Descripcion: string,
    Estado: number,
    Nombre: string,
    Valor: string,
    Since: string,
    IDPropiedades: number
}
export const ItemTable: FC<Props> = ({ Descripcion, Estado, Nombre, IDPropiedades, Since, Valor }) => {

    const navigate = useNavigate()

    const handleLook = (id: number) => {
        navigate(`/dashboard/propiedad/${id}`)
    }
    const handleEdit=(id:number)=>{
        navigate(`/dashboard/editar/${id}`)
    }

    return (
        <tr key={IDPropiedades} className='dashboard__container__table__body__row'>
            <td >{Nombre}</td>
            <td>{Descripcion}</td>
            <td>{Valor}</td>
            <td>{Estado}</td>
            <td>{Since}</td>
            <td>
                <button className='btn btn--table btn--look'
                    onClick={() => handleLook(IDPropiedades)}>
                    <span>
                        <img src={look} alt="look" />
                    </span>
                </button>
            </td>
            <td>
                <button className='btn btn--table btn--edit'
                onClick={()=>handleEdit(IDPropiedades)}>
                    <span>
                        <img src={edit} alt="" />
                    </span>
                </button>
            </td>
            <td>
                <button className='btn btn--table btn--delete'>
                    <span>
                        <img src={garbage} alt="" />
                    </span>
                </button>
            </td>
        </tr>
    )
}
