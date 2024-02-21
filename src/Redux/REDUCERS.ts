import { User, Terms } from '../DEFINITIONS'

const initialUser : User = {
    isLoggedIn : true
}

const USERS_REDUCER = (state : User = initialUser, action : { type : string, payload : User } )  : User => {
    switch(action.type) {
        case 'LOGIN' : {
            action.payload.isLoggedIn = true
            return action.payload
        }
        case 'LOGOUT' : {
            action.payload.isLoggedIn = false
            return action.payload
        }
        default : {
            return state
        }
    }
}

const initialSidePanel = true

const Side_Panel = (state : boolean = initialSidePanel, action :  { type : string, payload : boolean }) : boolean => {
    if(action.payload == undefined)
    return state
    else
    return action.payload
}

export  { 
    USERS_REDUCER , 
    Side_Panel 
}