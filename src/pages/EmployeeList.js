import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { titleTemplate } from '../utils/helpers';

const EmployeeList = props => {
  const employees = useSelector(state => state.employees.employees);
  const { title } = props;
  useEffect(() => {
    document.title = titleTemplate(title);
  }, [title]);
  console.log(employees);
  return <div>Employee List</div>;
};

export default EmployeeList;
