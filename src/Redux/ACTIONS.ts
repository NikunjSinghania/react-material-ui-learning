import { CONSTANTS_AUTH, CONSTANTS_SIDEPANEL } from './CONSTANTS'
import { User, Terms } from '../DEFINITIONS'

export const LOGIN = (user : User) : { type : string , payload : User  }=> {
    return  {
        type : CONSTANTS_AUTH.LOGIN,
        payload : user
    }
}


export const LOGOUT = (user : User) : { type : string , payload? : User | undefined } => {
    return  {
        type : CONSTANTS_AUTH.LOGIN,
    }
}

export const SIDE_PANEL = (st : boolean) : { type : string, payload : boolean} => {
    return {
        type : CONSTANTS_SIDEPANEL.SIDEPANEL,
        payload : st
    }
}

// export default {
//     LOGIN, 
//     LOGOUT,
//     SIDE_PANEL
// }