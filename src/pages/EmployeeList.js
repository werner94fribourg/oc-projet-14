import React, { useEffect } from 'react';
import { titleTemplate } from '../utils/helpers';
import globalStyles from '../App.module.scss';
import { Link } from 'react-router-dom';
import EmployeeTable from '../components/EmployeeList/Table/EmployeeTable';

const EmployeeList = props => {
  const { title } = props;
  useEffect(() => {
    document.title = titleTemplate(title);
  }, [title]);

  return (
    <React.Fragment>
      <div className={globalStyles.container}>
        <h1 className={globalStyles.title}>Current Employees</h1>
        <EmployeeTable />
        <Link className={globalStyles.link} to={'/add-employee'}>
          Home
        </Link>
      </div>
    </React.Fragment>
  );
};

export default EmployeeList;
