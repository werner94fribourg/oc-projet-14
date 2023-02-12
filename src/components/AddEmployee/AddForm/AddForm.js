import styles from './AddForm.module.scss';
import Input from '../Input/Input';
import AddressFieldSet from './AddressFieldSet/AddressFieldSet';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../../store/slice/employee';
import { DEPARTMENTS } from '../../../utils/globals';
import SubmitModal from '../../UI/Modal';
import { useState } from 'react';
import {
  emptyFieldValues,
  getAllFieldsValues,
  getEmployeeData,
  validateAllFields,
} from '../../../utils/helpers';

const AddForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees);

  const saveEmployeeHandler = event => {
    event.preventDefault();

    const values = getAllFieldsValues(Array.from(event.target.elements));
    const employee = getEmployeeData(values);

    const invalid = validateAllFields(employee);

    if (invalid) return;

    addEmployee(employee, dispatch);
    localStorage.setItem('employees', JSON.stringify([...employees, employee]));

    emptyFieldValues();

    handleOpenModal();
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
      <SubmitModal open={openModal} handleClose={handleCloseModal} />
    </form>
  );
};

export default AddForm;
