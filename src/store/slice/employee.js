import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = { employees: [] };

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    getAllEmployees(state, action) {
      const employees = action.payload;
      state.employees.push(...employees);
    },
    addEmployee(state, action) {
      const employee = action.payload;
      state.employees.push(employee);
    },
  },
});

const employeeActions = employeeSlice.actions;

export const getAllEmployees = dispatch => {
  const employees = JSON.parse(localStorage.getItem('employees'));

  if (employees) dispatch(employeeActions.getAllEmployees(employees));
};

export const addEmployee = (employee, dispatch) => {
  if (employee) {
    employee.id = uuid();
    dispatch(employeeActions.addEmployee(employee));
  }
};

const employeeReducer = employeeSlice.reducer;

export default employeeReducer;
