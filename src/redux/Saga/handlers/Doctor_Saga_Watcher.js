import {call, takeEvery, put} from 'redux-saga/effects'
import {DOCTOR_ADD_QUALIFICAION_FAILED, DOCTOR_ADD_QUALIFICAION_REQUESTED, DOCTOR_ADD_QUALIFICAION_SUCESS, DOCTOR_ADD_SPECIALITY_REQUESTED, DOCTOR_PROFILES_REQUESTED, DOCTOR_PROFILES_REQUESTED_FAILED, 
    DOCTOR_PROFILES_REQUESTED_SUCESS} from '../../constants'
import get_Doctor_Profiles from '../requests/get_Doctor_Profiles'
import add_Doctor_Qualification from '../requests/add_Doctor_Qualification'
import add_Doctor_Speciality from '../requests/add_Doctor_Speciality'


function* handle_Get_Doctor_Profiles(){
    console.log('handle_Get_Doctor_Profiles')
    try{
        const data = yield call(get_Doctor_Profiles)
        yield put({type:DOCTOR_PROFILES_REQUESTED_SUCESS, data: data})
    }catch(err){
        yield put({type:DOCTOR_PROFILES_REQUESTED_FAILED, errorData: err.response.data})

    }
}

function* handle_Add_Doctor_Qualification(formData){
    try{
        const data = yield call(add_Doctor_Qualification, formData.data)
        yield put({type: DOCTOR_ADD_QUALIFICAION_SUCESS, data: data })
    }catch(error){
        console.log(error)
        yield put({type: DOCTOR_ADD_QUALIFICAION_FAILED, errorData: error.data.errors})
    }
}

function* handle_Add_Doctor_Speciality(formData){
    try{
        const data = yield call(add_Doctor_Speciality, formData.data)
        yield put({type: DOCTOR_ADD_QUALIFICAION_SUCESS, data: data })
    }catch(error){
        console.log(error)
        yield put({type: DOCTOR_ADD_QUALIFICAION_FAILED, errorData: error.data.errors})
    }
}

function* watcher_Doctor_Saga() {
    yield takeEvery(DOCTOR_PROFILES_REQUESTED, handle_Get_Doctor_Profiles)
    yield takeEvery(DOCTOR_ADD_QUALIFICAION_REQUESTED, handle_Add_Doctor_Qualification)
    yield takeEvery(DOCTOR_ADD_SPECIALITY_REQUESTED, handle_Add_Doctor_Speciality)
    
}

export default watcher_Doctor_Saga;