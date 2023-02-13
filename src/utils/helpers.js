/**
 * Store of all global helper functions used in the application.
 * @module helpers
 */
import { EMPLOYEES_KEYS, GLOBAL_TITLE } from './globals';

/**
 * Function used to generate a custom title for a page we are navigating in the react application.
 * @param {string} title - the title description we want to add to the page
 * @returns {string} the new title we want to display
 */
export const titleTemplate = title => {
  if (!title) return GLOBAL_TITLE;
  return `${GLOBAL_TITLE} - ${title}`;
};

/**
 * Function used to retrieve from a list of html elements all the input values stored in it.
 * @param {HTMLElement[]} elements - the array of html elements from which we want to retrieve all the input values
 * @returns {Object[]} an array of key, values of all the existing inputs in the list
 */
export const getAllFieldsValues = elements => {
  return elements
    .filter(input => input.tagName !== 'BUTTON')
    .flatMap(input =>
      input.tagName === 'FIELDSET'
        ? Array.from(input)
        : input.tagName === 'DIV'
        ? input.querySelector('input')
        : input.name
        ? { [input.name]: input.value }
        : {}
    );
};

/**
 * Function used to merge an array of key and values of the employee into one single object.
 * @param {Object[]} values - the array of key values we want to merge
 * @returns {Object} a single object containing all the keys and their values
 */
export const getEmployeeData = values => {
  return values.reduce((merge, values) => {
    return { ...merge, ...values };
  }, {});
};

/**
 * Function used to validate the values filled by the user and to display the error messages for the invalid ones.
 * @param {Object} employee - an object containing all the keys and values for an employee
 * @returns {boolean} true if at least one field is invalid, false otherwise
 */
export const validateAllFields = employee => {
  let invalid = false;
  for (const [key, value] of Object.entries(employee)) {
    if (!value) invalid = true;
    const input = document.querySelector(`*[name="${key}"]`);
    input.dataset.invalid = !value;
    if (input.dataset.type === 'select') {
      const dropdown = input.closest('.react-dropdown-select');
      const wrapper = dropdown.parentElement;
      dropdown.dataset.invalid = !value;
      wrapper.dataset.invalid = !value;
    }
  }
  return invalid;
};

/**
 * Function used to clear all the values filled by the user if he successfully register a new employee.
 */
export const emptyFieldValues = () => {
  document.querySelectorAll('*[data-invalid="false"]').forEach(input => {
    input.removeAttribute('data-invalid');
    if (input.dataset.type !== 'select') {
      input.value = '';
    }
  });

  document.querySelectorAll('.react-dropdown-select-clear').forEach(input => {
    input.click();
  });

  setTimeout(() => {
    document.querySelector('body').click();
  }, 1);
};

/**
 * Function used to sort alphabetically an array of employees depending on a specific field.
 * @param {Object[]} employees - an array of employees we want to sort
 * @param {number} index - index of the field we want to sort
 * @param {boolean} order - ascending (true) or descending (false) order for sorting the employees
 * @returns {Object[]} the new sorted array of employees
 */
export const sortEmployeeArray = (employees, index, order) => {
  const newArray = [...employees];

  newArray.sort((a, b) =>
    a[EMPLOYEES_KEYS[index]] >= b[EMPLOYEES_KEYS[index]] ? 1 : -1
  );

  if (!order) {
    const reverse = [...newArray].reverse();

    return reverse;
  }

  return newArray;
};

/**
 * Function used to create a copy of an array of object (new reference).
 * @param {Object[]} array - the array of object we want to create a copy
 * @returns {Object[]} a copy of the array of objects
 */
export const getArrayCopy = array => {
  return array.map(item => {
    return {
      ...item,
    };
  });
};

/**
 * Function used to filter an array of objects by a specific key (the value must be a string).
 * @param {Object[]} array - the array of objects we want to filter
 * @param {string} key - the key on which we want to apply the filter
 * @param {string} pattern - the pattern used to filter the elements
 * @returns {Object[]} an array containing the filtered objects
 */
const filterArrayObjectsByKey = (array, key, pattern) => {
  return array.filter(item =>
    item[key].toLowerCase().includes(pattern.toLowerCase())
  );
};

/**
 * Function used to filter an array of objects with at least a key matching a certain pattern (all the keys must be string values)
 * @param {Object[]} array - the array of object we want to filter
 * @param {string} pattern - the pattern used to filter the elements
 * @returns {Object[]} an array containing the filtered objects
 */
export const filterArray = (array, pattern) => {
  const [firstItem] = array;
  if (!firstItem) return array;

  const keys = Object.keys(firstItem);

  const matchedItems = keys
    .map(key => filterArrayObjectsByKey(array, key, pattern))
    .reduce((finalArray, array) => {
      array.forEach(item => {
        if (finalArray.indexOf(item) === -1) finalArray.push(item);
      });
      return finalArray;
    }, []);
  matchedItems.sort((a, b) => (a.id <= b.id ? -1 : 1));

  return matchedItems;
};

/**
 * Function used to filter an array of employees or return a copy of it if the pattern is empty.
 * @param {Object[]} employees - the array of employees we want to filter
 * @param {string} pattern - the pattern used to filter the elements
 * @returns {Object[]} an array of employees containing the filtered items
 */
export const setFilteredEmployees = (employees, pattern) => {
  if (pattern === '') return [...employees];
  return filterArray(employees, pattern);
};
