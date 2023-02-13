import globalStyles from '../App.module.scss';
import EmployeeTable from '../components/EmployeeList/Table/EmployeeTable';
import { titleTemplate } from '../utils/helpers';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * The root component rendered when the user navigates to the employees' table page.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
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

EmployeeList.propTypes = {
  /** the title of the employees' table page */
  title: PropTypes.string,
};

export default EmployeeList;
