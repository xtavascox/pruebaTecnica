import { getInfoProps } from '../infrastructure/getInfoProps';
import { useEffect, useState } from 'react';
import { ObjectValue } from '../domain/interface';
import { ItemTable } from './ItemTable';
import { CreateProp } from './CreateProp';

export const Dashboard = () => {

  const [props, setProps] = useState<ObjectValue[]>([])
  useEffect(() => {
    getInfoProps().then((resp) => setProps(resp))
  }, [])



  return (
    <div>
      <h1>Dashboard propiedades</h1>
      <main className='dashboard'>
        <div className='dashboard__container__table'>
          <h2>Propiedades</h2>
          <table cellSpacing={0} cellPadding={10} style={{ width: '100%' }}>
            <thead className='dashboard__container__table__head'>
              <tr className='dashboard__container__table__head__row'>
                <td className='dashboard__container__table__head__row__item' >Nombre</td>
                <td className='dashboard__container__table__head__row__item' >Descripcion</td>
                <td className='dashboard__container__table__head__row__item' >Valor</td>
                <td className='dashboard__container__table__head__row__item' >Estado</td>
                <td className='dashboard__container__table__head__row__item' >Since</td>
                <td className='dashboard__container__table__head__row__item' colSpan={3}>Options</td>
              </tr>
            </thead>
            <tbody className='dashboard__container__table__body' >
              {
                props.map(({ DataBeanProperties }) => {
                  return (
                    <ItemTable key={DataBeanProperties.IDPropiedades} {...DataBeanProperties} />
                  )
                })
              }
            </tbody>
          </table>
        </div>

        <CreateProp />
      </main>
    </div>
  )
}
