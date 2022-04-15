
import { useEffect } from 'react';

import { ItemTable } from './ItemTable';
import { CreateProp } from './CreateProp';
import { useDispatch, useSelector } from 'react-redux';
import { initPropsRedux } from '../../../actions/update';
import { RootState } from '../../../store/store';

export const Dashboard = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initPropsRedux())
  }, [dispatch])

  const state: any = useSelector((state: RootState) => state.update)

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
                state.map(({ DataBeanProperties }: any) => {

                  return (<ItemTable key={DataBeanProperties.IDPropiedades} {...DataBeanProperties} />)
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
