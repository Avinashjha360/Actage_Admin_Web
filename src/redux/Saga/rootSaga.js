import {all} from 'redux-saga/effects';
import watcherTokenSaga from './handlers/fetchToken';
import watcher_HealthBook_Saga from './handlers/healthBook_createCategory';
import Doctor_Saga_Watcher from './handlers/Doctor_Saga_Watcher';
import Subscriber_Saga_Watcher from './handlers/Subscriber_Saga_Watcher';

export default function* rootSaga(){
    yield all([watcherTokenSaga(), watcher_HealthBook_Saga(), Doctor_Saga_Watcher(), Subscriber_Saga_Watcher()])
}