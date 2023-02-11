import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slice/employee';

const store = configureStore({
  reducer: { employees: employeeReducer },
});

export default store;
