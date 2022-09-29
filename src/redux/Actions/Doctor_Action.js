import {DOCTOR_PROFILES_REQUESTED, DOCTOR_OPEN_DIALOG_REQUESTED, DOCTOR_HANDLE_INPUT_CHANGE, DOCTOR_ADD_QUALIFICAION_REQUESTED, DOCTOR_ADD_SPECIALITY_REQUESTED} from '../constants';

export const getDoctorProfiles =()=>{
    console.log('getDoctorProfiles Actions')
    return{
        type:DOCTOR_PROFILES_REQUESTED,
    }
}

export const addDoctorProfile =()=>{
    console.log('getDoctorProfiles Actions')
    return{
        type:DOCTOR_PROFILES_REQUESTED,
    }
}

export const handleInputChange =(e)=>{
    console.log('getDoctorProfiles Actions')
    return{
        type:DOCTOR_HANDLE_INPUT_CHANGE,
        data:e
    }
}

export const handleOpenDialogDoctor =(item)=>{
    return{
        type:DOCTOR_OPEN_DIALOG_REQUESTED,
        data:item
    }
}

export const handleAddDoctorQualification =(item)=>{
    return{
        type: DOCTOR_ADD_QUALIFICAION_REQUESTED,
        data: item
    }
}

export const handleAddDoctorSpeciality =(item)=>{
    console.log(item)
    return{
        type: DOCTOR_ADD_SPECIALITY_REQUESTED,
        data: item
    }
}