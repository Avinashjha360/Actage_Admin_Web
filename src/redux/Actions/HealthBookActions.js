import {HANDLE_INPUT_CHANGE, TEST_CATEGORY_REQUESTED, MEDICAL_TEST_RESULT_TYPE_REQUESTED, ADD_MEDICAL_TEST_REQUESTED, OPEN_DIALOG_REQUESTED, 
    MEDICAL_TEST_BY_CATEGORY_REQUESTED,
    CREATE_CATEGORY_REQUESTED,
    DELETE_MEDICAL_TEST_REQUESTED} from '../constants'

export const getTestCategories =()=>{
    return{
        type:TEST_CATEGORY_REQUESTED,
        data:[]
    }
}

export const getMedicalTestResultTypes =()=>{
    return{
        type:MEDICAL_TEST_RESULT_TYPE_REQUESTED,
    }
}

export const handleInputChange =(e)=>{
    return{
        type:HANDLE_INPUT_CHANGE,
        data:e
    }
}

export const handleAddTest =(data)=>{
    console.log(data)
    return{
        type:ADD_MEDICAL_TEST_REQUESTED,
        data:data
    }
}

export const handleOpenDialog =(item)=>{
    return{
        type:OPEN_DIALOG_REQUESTED,
        data:item
    }
}

export const getMedicalTestByCategory =(categoryId)=>{
    return{
        type:MEDICAL_TEST_BY_CATEGORY_REQUESTED,
        data:categoryId
    }
}

export const handlecreateCategory =(categoryData)=>{
    return{
        type:CREATE_CATEGORY_REQUESTED,
        data:categoryData
    }
}

export const handleDeleteMedicalTest =(id)=>{
    return{
        type:DELETE_MEDICAL_TEST_REQUESTED,
        data:id
    }
}