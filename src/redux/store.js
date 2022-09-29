import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Saga/rootSaga'
import rootReducer from './rootReducer'
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer:rootReducer,        
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(rootSaga)
