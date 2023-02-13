/**
 * Slice of the employee in the redux store, containing its actions and reducer.
 * @module employee-slice
 */
import { setFilteredEmployees } from '../../utils/helpers';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

/**
 * @typedef EmployeeState - the state of an employee in the store
 * @property {Object[]} employees - the requested user's activities
 * @property {Object[]} averageSessions - the requested user's average sessions
 * @property {Object[]} performance - the requested user's performance
 *
 * User context object, that stores all the informations related to the requested user.
 * @type {EmployeeState}
 */
const initialState = {
  employees: [],
  filteredEmployees: [],
  filterPattern: '',
};

/**
 * The slice for the employee state in the redux store.
 * @type {Slice<EmployeeState>}
 */
const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    getAllEmployees(state, action) {
      const employees = action.payload;
      state.employees = [];
      state.employees.push(...employees);
      state.employees.sort((a, b) => (a.id <= b.id ? -1 : 1));
      state.filteredEmployees = setFilteredEmployees(
        state.employees,
        state.filterPattern
      );
    },
    addEmployee(state, action) {
      const employee = action.payload;
      state.employees.push(employee);
      state.employees.sort((a, b) => (a.id <= b.id ? -1 : 1));
      state.filteredEmployees = setFilteredEmployees(
        state.employees,
        state.filterPattern
      );
    },
    filterEmployees(state, action) {
      const pattern = action.payload;
      if (
        state.filterPattern !== 0 &&
        state.filterPattern.slice(0, -1) === pattern
      )
        state.filteredEmployees = setFilteredEmployees(
          state.filteredEmployees,
          pattern
        );
      else
        state.filteredEmployees = setFilteredEmployees(
          state.employees,
          pattern
        );
      state.pattern = pattern;
    },
  },
});

/**
 * The actions in the slice used to modify the store.
 */
const employeeActions = employeeSlice.actions;

/**
 * Function used to retrieve all the employee datas from the local storage and register it in the store.
 * @param {Function} dispatch the dispatcher function used to modify the store
 */
export const getAllEmployees = dispatch => {
  const employees = JSON.parse(localStorage.getItem('employees'));

  if (employees) dispatch(employeeActions.getAllEmployees(employees));
};

/**
 * Function used to filter the array of employees displayed in the table.
 * @param {string} pattern - the pattern used to filter the array of employees
 * @param {Function} dispatch - the dispatcher function used to modify the store
 */
export const filterEmployees = (pattern, dispatch) => {
  dispatch(employeeActions.filterEmployees(pattern));
};

/**
 * Function used to add a new employee into the store.
 * @param {Object} employee - the employee we want to add in the store
 * @param {Function} dispatch - the dispatcher function used to modify the store
 */
export const addEmployee = (employee, dispatch) => {
  if (employee) {
    employee.id = uuid();
    dispatch(employeeActions.addEmployee(employee));
  }
};

/**
 * Reducer for the employee slice, used to initialize it inside the global store.
 */
const employeeReducer = employeeSlice.reducer;

export default employeeReducer;
