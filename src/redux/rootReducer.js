import {LoginData} from './Reducers/LoginReducer'
import {combineReducers} from 'redux';
import {HealthBook_Data} from './Reducers/HealthBookReducer'
import {Doctor_Data} from './Reducers/DoctorReducer'
import {Subsciber_Data} from './Reducers/SubscriberReducer'

export default combineReducers({
    LoginData, 
    HealthBook_Data,
    Doctor_Data,
    Subsciber_Data
})