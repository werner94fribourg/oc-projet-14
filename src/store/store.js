/**
 * Global redux store of the application.
 * @module store
 */
import employeeReducer from './slice/employee';
import { configureStore } from '@reduxjs/toolkit';

/**
 * Global redux store of the application.
 */
const store = configureStore({
  reducer: { employees: employeeReducer },
});

export default store;
