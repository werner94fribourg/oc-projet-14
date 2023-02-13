import globalStyles from '../App.module.scss';
import AddForm from '../components/AddEmployee/AddForm/AddForm';
import Title from '../components/AddEmployee/Title/Title';
import { GLOBAL_TITLE } from '../utils/globals';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * The root component rendered when the user navigates to the home page, containing the submission form.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
const AddEmployee = () => {
  useEffect(() => {
    document.title = GLOBAL_TITLE;
  }, []);

  return (
    <React.Fragment>
      <Title />
      <div className={globalStyles.container}>
        <Link className={globalStyles.link} to={'/employee-list'}>
          View Current Employees
        </Link>
        <h2 className={globalStyles.subtitle}>Create Employee</h2>
        <AddForm />
      </div>
    </React.Fragment>
  );
};

AddEmployee.propTypes = {};

export default AddEmployee;
