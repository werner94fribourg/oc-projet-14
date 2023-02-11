import { Navigate, Route, Routes } from 'react-router';
import AddEmployee from '../../pages/AddEmployee';
import EmployeeList from '../../pages/EmployeeList';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="add-employee" element={<AddEmployee />} />
      <Route
        path="employee-list"
        element={<EmployeeList title="Current Employees" />}
      />
      <Route
        path="*"
        element={<Navigate to="/add-employee" replace />}
        replace
      />
    </Routes>
  );
};

export default AppRouter;
