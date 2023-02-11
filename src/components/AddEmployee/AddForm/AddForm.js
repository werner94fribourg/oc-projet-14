import styles from './AddForm.module.scss';
import Input from '../Input/Input';
import AddressFieldSet from './AddressFieldSet/AddressFieldSet';
import { DEPARTMENTS } from '../../../utils/globals';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../../store/slice/employee';

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
          : { [input.name]: input.value }
      );

    const employee = values.reduce((merge, values) => {
      return { ...merge, ...values };
    }, {});
    let invalid = false;
    for (const [key, value] of Object.entries(employee)) {
      if (!value) invalid = true;
      document.querySelector(`*[name="${key}"]`).dataset.invalid = !value;
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
      <Input id="department" type="select" title="Department">
        {DEPARTMENTS.map((dep, index) => (
          <option key={index} value={index}>
            {dep}
          </option>
        ))}
      </Input>
      <div className={styles.submit}>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default AddForm;
