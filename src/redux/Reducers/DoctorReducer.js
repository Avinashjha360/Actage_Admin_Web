import { DOCTOR_PROFILES_REQUESTED, DOCTOR_PROFILES_REQUESTED_FAILED, DOCTOR_PROFILES_REQUESTED_SUCESS, DOCTOR_OPEN_DIALOG_REQUESTED, DOCTOR_HANDLE_INPUT_CHANGE, DOCTOR_ADD_QUALIFICAION_REQUESTED, DOCTOR_ADD_QUALIFICAION_SUCESS, DOCTOR_ADD_QUALIFICAION_FAILED, DOCTOR_ADD_SPECIALITY_REQUESTED, DOCTOR_ADD_SPECIALITY_SUCESS, DOCTOR_ADD_SPECIALITY_FAILED } from '../constants'

const initialState = {
    doctor_Profiles: [],
    dialogOpen: {
        doctor_Profile_Form: false,
        qualification_Form: false,
        speciality_Form: false
    },
    formData: {
        name: ''
    },
    errorData:{}
}

export const Doctor_Data = (state = initialState, action) => {
    switch (action.type) {
        case DOCTOR_HANDLE_INPUT_CHANGE:
            console.log('DOCTOR_PROFILES_REQUESTED_FAILED called', action.data)
            const { name, value } = action.data.target
            console.log("Name", name + 'Value', value)
            return { ...state, formData: { [name]: value } }
        case DOCTOR_PROFILES_REQUESTED:
            console.log('DOCTOR_PROFILES_REQUESTED called')
            return { ...state, }
        case DOCTOR_PROFILES_REQUESTED_SUCESS:
            console.log('DOCTOR_PROFILES_REQUESTED_SUCESS called', action.data.data.data)
            return { ...state, doctor_Profiles: action.data.data.data }
        case DOCTOR_PROFILES_REQUESTED_FAILED:
            console.log('DOCTOR_PROFILES_REQUESTED_FAILED called', action.data)
            return { ...state, }
        case DOCTOR_OPEN_DIALOG_REQUESTED:
            console.log('DOCTOR_OPEN_DIALOG_REQUESTED called', action)
            if (action.data === 'addDoctorProfile') {
                return { ...state, dialogOpen: { doctor_Profile_Form: !state.dialogOpen.doctor_Profile_Form, qualification_Form: false, speciality_Form: false } }
            } else if (action.data === 'addDQualification') {
                return { ...state, dialogOpen: { qualification_Form: !state.dialogOpen.qualification_Form, speciality_Form: false, doctor_Profile_Form: false } }
            } else if (action.data === 'addSpeciality') {
                return { ...state, dialogOpen: { speciality_Form: !state.dialogOpen.speciality_Form, qualification_Form: false, doctor_Profile_Form: false } }
            }
            break
        case DOCTOR_ADD_QUALIFICAION_REQUESTED:
            console.log('DOCTOR_ADD_QUALIFICAION_REQUESTED called', action.data)
            return { ...state, }
        case DOCTOR_ADD_QUALIFICAION_SUCESS:
            console.log('DOCTOR_ADD_QUALIFICAION_SUCESS called', action.data)
            return { ...state, dialogOpen: {qualification_Form: false} }
        case DOCTOR_ADD_QUALIFICAION_FAILED:
            console.log('DOCTOR_ADD_QUALIFICAION_FAILED called', action.errorData)
            return { ...state, errorData: action.errorData}
            case DOCTOR_ADD_SPECIALITY_REQUESTED:
            console.log('DOCTOR_ADD_SPECIALITY_REQUESTED called', action.data)
            return { ...state, }
        case DOCTOR_ADD_SPECIALITY_SUCESS:
            console.log('DOCTOR_ADD_SPECIALITY_SUCESS called', action.data)
            return { ...state, dialogOpen: {speciality_Form: false} }
        case DOCTOR_ADD_SPECIALITY_FAILED:
            console.log('DOCTOR_ADD_SPECIALITY_FAILED called', action.errorData)
            return { ...state, errorData: action.errorData}
        default:
            return state
    }
}