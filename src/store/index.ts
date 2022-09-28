import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ 
            thunk: false,
            serializableCheck: {
                ignoreActions: true
            }
        }).prepend(sagaMiddleware);
    }
})

sagaMiddleware.run(rootSaga);

export default store;
