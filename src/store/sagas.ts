import { all } from 'redux-saga/effects';
import { userSaga } from 'pages/login/store';

export default function* rootSaga() {
    yield all([
        ...userSaga
    ]);
}
