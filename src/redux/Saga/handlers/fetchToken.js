import {call, takeEvery, put} from 'redux-saga/effects'
import {GET_TOKEN_REQUESTED, GET_TOKEN_SUCESS, GET_TOKEN_FAILED} from '../../constants'
import fechToken from '../requests/fetchToken'

function* handleUserToken(credentials){
    // console.log('handleUserToken',credentials.data)
    try{
        const token = yield call(fechToken, credentials.data)
        yield put({type:GET_TOKEN_SUCESS, tokenData: token})
    }catch(err){
        // console.log('Error',err.response.data)
        yield put({type:GET_TOKEN_FAILED, errorData: err.response.data})

    }
}

function* watcherTokenSaga() {
        yield takeEvery(GET_TOKEN_REQUESTED, handleUserToken)
}

export default watcherTokenSaga;