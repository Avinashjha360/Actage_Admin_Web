import { HANDLE_INPUT_CHANGE, GET_TOKEN_REQUESTED, GET_TOKEN_SUCESS, GET_TOKEN_FAILED } from '../constants'

const initialState = {
    email : '',
    password: '',
    deviceToken:null,
    token:'',
    platform:'web',
    tokenData: {},
    loading: false,
    errorData: {},
    isAuthUser:false
}

export const LoginData = (state = initialState, action) => {

    switch (action.type) {
        case HANDLE_INPUT_CHANGE:
            const {name, value} = action.data.target
            // console.log('reducer called',name, value )
            return {...state, [name] : value}
        case GET_TOKEN_REQUESTED:
            // console.log('GET_TOKEN_REQUESTED called')
            return { ...state}
        case GET_TOKEN_SUCESS:
            console.log('GET_TOKEN_SUCESS called', action.tokenData)
            localStorage.setItem("token", JSON.stringify(action.tokenData.token));
            return { ...state, tokenData: action.tokenData, token: action.tokenData.token, isAuthUser:true}
        case GET_TOKEN_FAILED:
            console.log('GET_TOKEN_FAILED called', action.errorData)
            return { ...state, errorData: action.errorData }

        default:
            return state
    }
}