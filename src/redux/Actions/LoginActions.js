import {HANDLE_INPUT_CHANGE, GET_TOKEN_REQUESTED} from '../constants'

export const get_Internal_User_Login_Token =(credentials)=>{
    // console.log('Values from Login form ', credentials)
    return{
        type:GET_TOKEN_REQUESTED,
        data:credentials
    }
}

export const handleInputChange =(e)=>{
    return{
        type:HANDLE_INPUT_CHANGE,
        data:e
    }
}