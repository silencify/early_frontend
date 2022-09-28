import {combineReducers} from '@reduxjs/toolkit';
import { userReducer } from 'pages/login/store';

const rootReducer = () => (
    combineReducers({
       ...userReducer 
    })
)

export default rootReducer;
