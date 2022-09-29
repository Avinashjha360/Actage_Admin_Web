import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_REQUESTED, SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_FAILED,SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_SUCESS,
     SUBSCRIBER_ASSIGN_ASSOCIATE_TO_SUBSCRIBER_REQUESTED,
     SUBSCRIBER_GET_ALL_PRODUCTS_REQUESTED,
     SUBSCRIBER_GET_ALL_PRODUCTS_SUCESS,
     SUBSCRIBER_GET_ALL_PRODUCTS_FAILED
    } from '../../constants';
import get_Active_Subscriptions from '../requests/get_Active_Subscriptions';
import assign_To_Associate from '../requests/assign_To_Associate'
import get_All_Products from '../requests/get_All_Products'

function* handle_Get_Active_Subscriptions(){
    try{
        const data = yield call(get_Active_Subscriptions)
        console.log(data)
        yield put({type: SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_SUCESS, data: data})
    }catch(error){
        console.log('Errors', error)
        yield put({type: SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_FAILED, errorData: error})
    }
   
}

function* handle_Assign_To_Associate(associateData){
    try{
       const result =  yield call(assign_To_Associate, associateData.data)
       console.log(result)
        // yield put ()
    }catch(error){
        console.log(error)
        // yield put()
    }    
}

function* handle_Get_All_Products() {
    try{
        const data = yield call(get_All_Products)
        yield put({type :SUBSCRIBER_GET_ALL_PRODUCTS_SUCESS, data:data})
    }catch(error){
        console.log(error)
        yield put({type:SUBSCRIBER_GET_ALL_PRODUCTS_FAILED, errorData: error})
    }
}

function* Subscriber_Saga_Watcher (){
    yield takeLatest(SUBSCRIBER_GET_ACTIVE_SUBSCRIPTIONS_REQUESTED, handle_Get_Active_Subscriptions )
    yield takeEvery(SUBSCRIBER_ASSIGN_ASSOCIATE_TO_SUBSCRIBER_REQUESTED, handle_Assign_To_Associate )
    yield takeEvery(SUBSCRIBER_GET_ALL_PRODUCTS_REQUESTED, handle_Get_All_Products )
}

export default Subscriber_Saga_Watcher;