import {
    HANDLE_INPUT_CHANGE, TEST_CATEGORY_SUCESS, TEST_CATEGORY_FAILED, TEST_CATEGORY_REQUESTED, MEDICAL_TEST_RESULT_TYPE_REQUESTED, MEDICAL_TEST_RESULT_TYPE_FAILED,
    MEDICAL_TEST_RESULT_TYPE_SUCESS,
    ADD_MEDICAL_TEST_REQUESTED,
    ADD_MEDICAL_TEST_SUCESS,
    ADD_MEDICAL_TEST_FAILED,
    OPEN_DIALOG_REQUESTED,
    MEDICAL_TEST_BY_CATEGORY_SUCESS,
    MEDICAL_TEST_BY_CATEGORY_FAILED,
    MEDICAL_TEST_BY_CATEGORY_REQUESTED,
    CREATE_CATEGORY_REQUESTED,
    CREATE_CATEGORY_SUCESS,
    CREATE_CATEGORY_FAILED,
    DELETE_MEDICAL_TEST_REQUESTED,
    DELETE_MEDICAL_TEST_SUCESS,
    DELETE_MEDICAL_TEST_FAILED
} from '../constants'

const initialState = {
    testCategories: [],
    errorData: [],
    result_Types: {
        data: []
    },
    addmedicalTestData: {},
    dialogOpen: {
        testForm: false,
        cateforyForm: false,
        editForm: false
    },
    medical_Test_Data: [],
    autoRefreshPage: false
}

export const HealthBook_Data = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_INPUT_CHANGE:
            const { name, value } = action.data.target
            let addmedicalTestData = { ...state.addmedicalTestData, [name]: value }
            // console.log('reducer called',name, value )
            return { ...state, addmedicalTestData }
        case TEST_CATEGORY_REQUESTED:
            // console.log('GET_TOKEN_REQUESTED called')
            return { ...state }
        case TEST_CATEGORY_SUCESS:
            console.log('TEST_CATEGORY_SUCESS called', action.data)
            return { ...state, testCategories: action.data.data }
        case TEST_CATEGORY_FAILED:
            console.log('TEST_CATEGORY_FAILED called', action.errorData)
            return { ...state, errorData: action.errorData }
        case MEDICAL_TEST_RESULT_TYPE_REQUESTED:
            console.log('MEDICAL_TEST_RESULT_TYPE_REQUESTED called')
            return { ...state, }
        case MEDICAL_TEST_RESULT_TYPE_SUCESS:
            console.log('MEDICAL_TEST_RESULT_TYPE_SUCESS called', action.result_Types)
            return { ...state, result_Types: action.result_Types }
        case MEDICAL_TEST_RESULT_TYPE_FAILED:
            console.log('MEDICAL_TEST_RESULT_TYPE_FAILED called', action.errorData)
            return { ...state, errorData: action.errorData }
        case ADD_MEDICAL_TEST_REQUESTED:
            console.log('ADD_MEDICAL_TEST_REQUESTED called')
            return { ...state }
        case ADD_MEDICAL_TEST_SUCESS:
            console.log('ADD_MEDICAL_TEST_TEST_SUCESS called', action)
            return { ...state, dialogOpen: !state.dialogOpen, addmedicalTestData: {}, autoRefreshPage: !state.autoRefreshPage }
        case ADD_MEDICAL_TEST_FAILED:
            console.log('ADD_MEDICAL_TEST_TEST_FAILED called', action)
            return { ...state, errorData: action.errorData }
        case OPEN_DIALOG_REQUESTED:
            console.log('OPEN_DIALOG_REQUESTED called', action)
            if (action.data === 'test') {
                return { ...state, dialogOpen: { testForm: !state.dialogOpen.testForm, cateforyForm: false, editForm:false } }
            } else if (action.data === 'editForm') {
                return { ...state, dialogOpen: { testForm: false, cateforyForm:false, editForm: !state.dialogOpen.editForm } }
            }else if(action.data === 'category') {
                return { ...state, dialogOpen: { cateforyForm: !state.dialogOpen.cateforyForm, testForm: false, editForm:false } }
            }
            break
        case MEDICAL_TEST_BY_CATEGORY_REQUESTED:
            console.log('MEDICAL_TEST_BY_CATEGORY_REQUESTED called', action)
            return { ...state }
        case MEDICAL_TEST_BY_CATEGORY_SUCESS:
            console.log('MEDICAL_TEST_BY_CATEGORY_SUCESS called', action)
            return { ...state, medical_Test_Data: action.data.data }
        case MEDICAL_TEST_BY_CATEGORY_FAILED:
            console.log('MEDICAL_TEST_BY_CATEGORY_FAILED called', action)
            return { ...state }
        case DELETE_MEDICAL_TEST_REQUESTED:
            console.log('DELETE_MEDICAL_TEST_REQUESTED called', action)
            return { ...state, autoRefreshPage: !state.autoRefreshPage }
        case DELETE_MEDICAL_TEST_SUCESS:
            console.log('DELETE_MEDICAL_TEST_SUCESS called', action)
            return { ...state, autoRefreshPage: !state.autoRefreshPage }
        case DELETE_MEDICAL_TEST_FAILED:
            console.log('DELETE_MEDICAL_TEST_FAILED called', action)
            return { ...state }
        case CREATE_CATEGORY_REQUESTED:
            console.log('CREATE_CATEGORY_REQUESTED called', action)
            return { ...state }
        case CREATE_CATEGORY_SUCESS:
            console.log('CREATE_CATEGORY_SUCESS called', action)
            return { ...state, dialogOpen: false, addmedicalTestData: {}, autoRefreshPage: !state.autoRefreshPage }
        case CREATE_CATEGORY_FAILED:
            console.log('CREATE_CATEGORY_FAILED called', action)
            return { ...state }

        default:
            return state
    }
}