import { call, takeEvery, put } from 'redux-saga/effects'
import {
    TEST_CATEGORY_REQUESTED, TEST_CATEGORY_SUCESS, TEST_CATEGORY_FAILED, MEDICAL_TEST_RESULT_TYPE_REQUESTED, MEDICAL_TEST_RESULT_TYPE_FAILED,
    MEDICAL_TEST_RESULT_TYPE_SUCESS, ADD_MEDICAL_TEST_REQUESTED, ADD_MEDICAL_TEST_FAILED, ADD_MEDICAL_TEST_SUCESS, MEDICAL_TEST_BY_CATEGORY_REQUESTED, MEDICAL_TEST_BY_CATEGORY_SUCESS, MEDICAL_TEST_BY_CATEGORY_FAILED, CREATE_CATEGORY_REQUESTED, CREATE_CATEGORY_SUCESS, CREATE_CATEGORY_FAILED, DELETE_MEDICAL_TEST_REQUESTED, DELETE_MEDICAL_TEST_FAILED, DELETE_MEDICAL_TEST_SUCESS
} from '../../constants'
import get_Test_Categories from '../requests/get_Test_Categories';
import get_Medical_Result_Type from '../requests/get_Medical_Result_Type';
import add_Medical_Test from '../requests/add_Medical_Test';
import get_Medical_Test_By_Category from '../requests/get_Medical_Test_By_Category';
import create_Category from '../requests/create_Category';
import delete_Medical_Test from '../requests/delete_Medical_Test';

function* handle_Test_Categories() {
    try {
        const data = yield call(get_Test_Categories)
        console.log('handle_Test_Categories', data)
        yield put({ type: TEST_CATEGORY_SUCESS, data: data })
    } catch (err) {
        yield put({ type: TEST_CATEGORY_FAILED, errorData: err.response.data })

    }
}

function* handle_Medical_Result_Type() {
    try {
        const data = yield call(get_Medical_Result_Type)
        yield put({ type: MEDICAL_TEST_RESULT_TYPE_SUCESS, result_Types: data })
    } catch (err) {
        yield put({ type: MEDICAL_TEST_RESULT_TYPE_FAILED, errorData: err.response.data })

    }
}

function* handle_Add_Medical_Test(userData) {
    console.log('handle_Add_Medical_Test', userData.data)
    try {
        const testData = yield call(add_Medical_Test, userData.data)
        yield put({ type: ADD_MEDICAL_TEST_SUCESS, result_Types: testData })
    } catch (err) {
        console.log('handle_Add_Medical_Test', err)
        err.status === 500 ?
            yield put({ type: ADD_MEDICAL_TEST_FAILED, errorData: err.data })
            : yield put({ type: ADD_MEDICAL_TEST_FAILED, errorData: err.data.errors })


    }
}

function* handle_Get_Medical_Test_By_Category(categoryId) {
    try {
        const data = yield call(get_Medical_Test_By_Category, categoryId.data)
        yield put({ type: MEDICAL_TEST_BY_CATEGORY_SUCESS, data: data })
    } catch (err) {
        yield put({ type: MEDICAL_TEST_BY_CATEGORY_FAILED, errorData: err.response.data })

    }
}


function* handle_Create_Category(categoryData) {
    try {
        const category_Data = yield call(create_Category, categoryData.data)
        console.log('category_Data==>>>', category_Data)
        yield put({ type: CREATE_CATEGORY_SUCESS, Category_Data: category_Data })
    } catch (err) {
        yield put({ type: CREATE_CATEGORY_FAILED, errorData: err.response.data })

    }
}

function* handle_Delete_Medical_Test(id) {
    try {
        const data = yield call(delete_Medical_Test, id.data)
        console.log('handle_Delete_Medical_Test', data)
        yield put({ type: DELETE_MEDICAL_TEST_SUCESS, data: data })
    } catch (error) {
        yield put({ type: DELETE_MEDICAL_TEST_FAILED, errorData: error.response })
    }
}

function* watcher_HealthBook_Saga() {
    yield takeEvery(TEST_CATEGORY_REQUESTED, handle_Test_Categories)
    yield takeEvery(MEDICAL_TEST_RESULT_TYPE_REQUESTED, handle_Medical_Result_Type)
    yield takeEvery(ADD_MEDICAL_TEST_REQUESTED, handle_Add_Medical_Test)
    yield takeEvery(DELETE_MEDICAL_TEST_REQUESTED, handle_Delete_Medical_Test)
    yield takeEvery(MEDICAL_TEST_BY_CATEGORY_REQUESTED, handle_Get_Medical_Test_By_Category)
    yield takeEvery(CREATE_CATEGORY_REQUESTED, handle_Create_Category)


}

export default watcher_HealthBook_Saga;