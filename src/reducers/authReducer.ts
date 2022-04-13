import { Actions } from '../actions/interface';
import {type} from '../types/types'
const initialState={
    logged:false
}

export const authReducer = (state = initialState, action:Actions) => {
    switch(action.type){
        case type.login:
        return {
            ...action.payload,
            logged:true
        }
        default :
        return state;
    }
}
