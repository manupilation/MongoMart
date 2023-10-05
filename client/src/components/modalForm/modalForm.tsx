import { useContext } from 'react';
import { globalContext } from '../../context/globalContext';
import "./modalForm.css";
import FormNewProduct from '../formNewProduct/formNewProduct';


const ModalForm = () => {
  const {isCreating, setIsCreating} = useContext(globalContext);

  if (isCreating)
  return (
    <div className='modalContainer'>
      <div className='modalFormWrapper'>
        <h3>Informe os dados do novo produto:</h3>
        <FormNewProduct />
        <span onClick={() => setIsCreating(false)}>X</span>
      </div>
    </div>
  )
}

export default ModalForm