import React, { useEffect } from 'react';
import { GLOBAL_TITLE } from '../utils/globals';
import globalStyles from '../App.module.scss';
import { Link } from 'react-router-dom';
import Title from '../components/AddEmployee/Title/Title';
import AddForm from '../components/AddEmployee/AddForm/AddForm';

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

export default AddEmployee;
