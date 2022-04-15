import { useParams } from 'react-router-dom'

export const LookProp = () => {
   const {id}= useParams()
   console.log(id);
  return (
    <div>LookProp</div>
  )
}
