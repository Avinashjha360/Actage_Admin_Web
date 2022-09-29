import { SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_FAILED, SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_REQUESTED, SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_SUCESS, SUBSCRIBER_GET_ALL_PRODUCTS_FAILED, SUBSCRIBER_GET_ALL_PRODUCTS_REQUESTED, SUBSCRIBER_GET_ALL_PRODUCTS_SUCESS, SUBSCRIBER_HANDLE_INPUT_CHANGE } from '../constants'

const initialState = {
    subscriptionData: {
        ActiveSubscriptions: [],
        InternalUserUser: []
    },
    formData: {},
    allProducts:[]
}
export const Subsciber_Data = (state = initialState, action) => {

    switch (action.type) {
        case SUBSCRIBER_HANDLE_INPUT_CHANGE:
            const { name, value } = action.data.target
            let formData = { ...state.formData, [name]: value }
            // console.log('reducer called',name, value )
            return { ...state, formData }
        case SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_REQUESTED:
            console.log('SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_REQUESTED called ', action.data)
            return { ...state }
        case SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_SUCESS:
            console.log('SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_SUCESS called ', action.data)
            return { ...state, subscriptionData: action.data }
        case SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_FAILED:
            console.log('SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_FAILED called ', action.data)
            return { ...state }
        case SUBSCRIBER_GET_ALL_PRODUCTS_REQUESTED:
            console.log('SUBSCRIBER_GET_ALL_PRODUCTS_REQUESTED called ')
            return { ...state }
        case SUBSCRIBER_GET_ALL_PRODUCTS_SUCESS:
            console.log('SUBSCRIBER_GET_ALL_PRODUCTS_SUCESS called ', action.data)
            return { ...state, allProducts:action.data }
        case SUBSCRIBER_GET_ALL_PRODUCTS_FAILED:
            console.log('SUBSCRIBER_GET_ALL_PRODUCTS_FAILED called ', action.data)
            return { ...state }
        default:
            return state
    }
}