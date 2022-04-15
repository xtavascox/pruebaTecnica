import { Actions } from "../actions/interface";
import { type } from "../types/types";

const initialState = {
  Nombre: "",
  IDPropiedades: null,
  Descripcion: "",
  Valor: "",
  Estado: null,
  atributo:""
};

export const updateReducer = (state = initialState, action:Actions)=> {
  switch (action.type) {
      
    case type.edit:
      return action.payload;

    case type.create:
        return action.payload

    case type.delete:
        return action.payload
    
    default:
      return state;
  }
};
