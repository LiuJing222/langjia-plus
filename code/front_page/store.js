import {createStore} from 'redux';

const LoginVar = (state={},action)=>{
    switch(action.type){
        case 'set_login_info':
            return {...state,state:action.value}
        default:
            return action.value;
    }
}

let store = createStore(LoginVar);

export default store;