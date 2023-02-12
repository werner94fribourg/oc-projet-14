import styles from './AddForm.module.scss';
import Input from '../Input/Input';
import AddressFieldSet from './AddressFieldSet/AddressFieldSet';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../../store/slice/employee';
import { DEPARTMENTS } from '../../../utils/globals';

const AddForm = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees);

  const saveEmployeeHandler = event => {
    event.preventDefault();
    const values = Array.from(event.target.elements)
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
    const employee = values.reduce((merge, values) => {
      return { ...merge, ...values };
    }, {});

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

    if (invalid) return;

    addEmployee(employee, dispatch);
    localStorage.setItem('employees', JSON.stringify([...employees, employee]));
  };

  return (
    <form className={styles.form} onSubmit={saveEmployeeHandler}>
      <Input
        id="firstName"
        type="text"
        title="First Name"
        errorMessage="Please provide a valid first name."
      />
      <Input
        id="lastName"
        type="text"
        title="Last Name"
        errorMessage="Please provide a valid last name."
      />
      <Input
        id="birthDate"
        type="date"
        title="Date of Birth"
        errorMessage="Please provide a valid date."
      />
      <Input
        id="startDate"
        type="date"
        title="Start Date"
        errorMessage="Please provide a valid date."
      />
      <AddressFieldSet />
      <Input
        id="department"
        type="select"
        title="Department"
        errorMessage="Please select a department."
        options={DEPARTMENTS}
      />
      <div className={styles.submit}>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default AddForm;
