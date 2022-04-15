import { Actions } from "../actions/interface";
import { type } from "../types/types";

export const updateReducer = (state = [], action: Actions) => {
  switch (action.type) {
    case type.create:
      return [...state, action.payload];

    case type.init:
      return action.payload;

    case type.delete:
      const result = state.filter(
        (item: any) => item.DataBeanProperties.IDPropiedades !== action.payload
      );
      return result;

    default:
      return state;
  }
};
