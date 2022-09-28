import UserSaga from './sagas';
import UserReducer from './reducers';
import userActions from './actions';

export const userReducer = {
    userReducer: UserReducer,
};

export const userSaga = [UserSaga()];

export { userActions }

