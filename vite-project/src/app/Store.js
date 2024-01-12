import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from '../feature/todo/Todoslice';

export const store = configureStore({

 reducer :TodoReducer
    
})