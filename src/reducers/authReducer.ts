import { Actions } from '../actions/interface';
import {type} from '../types/types'
import { ObjectValueDataBeanProperties} from '../components/login/domain/interface';
const initialState:ObjectValueDataBeanProperties={
    msg: '',
    IDDocument: null,
    IDSession: 0,
    bloqueado: true,
    MacAddress: '',
    IDAccount: 0,
    InitDate: '',
    IDOffice: 0,
    Estado: '',
    Type: 0,
    FinalDate: null,
    LeftDate: null,
    LeftValue: null,
    State: 0,
    IPAddress: '',
    HostName: ''
}

export const authReducer = (state = initialState, action:Actions):ObjectValueDataBeanProperties => {
    switch(action.type){
        case type.login:
        return action.payload || state;

        default :
        return state;
    }
}
