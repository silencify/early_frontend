import { AnyAction } from '@reduxjs/toolkit';
import { takeLatest, put, call, all, delay } from 'redux-saga/effects';
import actions from './actions';

export const login = takeLatest(actions.LOGIN, function* (action: AnyAction) {
    try {
        yield delay(3000);
        localStorage.setItem('token', 'abc') 
        yield put({type: actions.LOGIN_SUCCESS});
        yield call(action.resolve, 'success')
    } catch (error) {
        yield call(action.reject, 'reject')
    }
})


export default function* saga(){
    yield all([
        login
    ])
}
