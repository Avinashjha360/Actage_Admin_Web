import { SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_REQUESTED, SUBSCRIBER_HANDLE_INPUT_CHANGE, SUBSCRIBER_ASSIGN_ASSOCIATE_TO_SUBSCRIBER_REQUESTED, 
    SUBSCRIBER_GET_ALL_PRODUCTS_REQUESTED } from '../constants';

export const get_ACtive_Subscriptions = () => {
    console.log('get_ACtive_Subscriptions called')
    return {
        type: SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_REQUESTED,
        payload: null
    }
}

export const handleInputChange = (e) => {
    console.log('handleInputChange Actions')
    return {
        type: SUBSCRIBER_HANDLE_INPUT_CHANGE,
        data: e
    }
}

export const handleAssignSubscriber = (data) => {
    console.log('handleAssignSubscriber Actions', data)
    return {
        type: SUBSCRIBER_ASSIGN_ASSOCIATE_TO_SUBSCRIBER_REQUESTED,
        data : data
    }
}

export const handleGetAllProducts = () => {
    console.log('handleGetAllProducts Actions')
    return {
        type: SUBSCRIBER_GET_ALL_PRODUCTS_REQUESTED
    }
}