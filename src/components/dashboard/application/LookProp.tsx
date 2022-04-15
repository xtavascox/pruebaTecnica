import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ObjectValue } from '../domain/interface';
import { getInfoPropById } from '../infrastructure/getInfoPropById';

type Params = {
  id: string
}

export const LookProp = () => {
  const { id } = useParams<Params>();
  const [prop, setProp] = useState<ObjectValue>()

  useEffect(() => {
    getInfoPropById(id).then(resp => setProp(resp))
  }, [id])

  return (
    <main className='info'>
      <section className='info__container' >

        <h3 className='info__titulo'>Nombre :</h3>
        <p className='info__content'>{prop?.DataBeanProperties.Nombre}</p>

        <h3 className='info__titulo'>Descripcion :</h3>
        <p className='info__content'>{prop?.DataBeanProperties.Descripcion}</p>
        
        <h3 className='info__titulo'>Id perfil de banco :</h3>
        <p className='info__content'>{prop?.DataBeanProperties.IDPerfilBanco ? prop?.DataBeanProperties.IDPerfilBanco:'No tiene'}</p>
        
        <h3 className='info__titulo'>Id propiedas :</h3>
        <p className='info__content'>{prop?.DataBeanProperties.IDPropiedades}</p>
        
        <h3 className='info__titulo'>Valor :</h3>
        <p className='info__content'>{prop?.DataBeanProperties.Valor}</p>
        
        <h3 className='info__titulo'>Fecha de creacion :</h3>
        <p className='info__content'>{prop?.DataBeanProperties.Since}</p>

      </section>
    </main>
  )
}
