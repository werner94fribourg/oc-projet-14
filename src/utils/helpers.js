import { GLOBAL_TITLE } from './globals';

export const titleTemplate = title => {
  return `${GLOBAL_TITLE} - ${title}`;
};

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

export const getEmployeeData = values => {
  return values.reduce((merge, values) => {
    return { ...merge, ...values };
  }, {});
};

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

export const sortEmployeeArray = (employees, index, order) => {
  const newArray = [...employees];

  switch (index) {
    case 0:
      newArray.sort((a, b) => (a.firstName >= b.firstName ? 1 : -1));
      break;
    case 1:
      newArray.sort((a, b) => (a.lastName >= b.lastName ? 1 : -1));
      break;
    case 2:
      newArray.sort((a, b) => (a.birthDate >= b.birthDate ? 1 : -1));
      break;
    case 3:
      newArray.sort((a, b) => (a.startDate >= b.startDate ? 1 : -1));
      break;
    case 4:
      newArray.sort((a, b) => (a.street >= b.street ? 1 : -1));
      break;
    case 5:
      newArray.sort((a, b) => (a.city >= b.city ? 1 : -1));
      break;
    case 6:
      newArray.sort((a, b) => (a.state >= b.state ? 1 : -1));
      break;
    case 7:
      newArray.sort((a, b) => (a.zipCode >= b.zipCode ? 1 : -1));
      break;
    case 8:
      newArray.sort((a, b) => (a.department >= b.department ? 1 : -1));
      break;
    default:
      break;
  }

  if (!order) {
    const reverse = [...newArray].reverse();

    return reverse;
  }

  return newArray;
};

export const getArrayCopy = array => {
  return array.map(item => {
    return {
      ...item,
    };
  });
};
