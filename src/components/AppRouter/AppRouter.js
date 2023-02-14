import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router';

const AddEmployee = loadable(() => import('../../pages/AddEmployee'));
const EmployeeList = loadable(() => import('../../pages/EmployeeList'));
/**
 * The router of the application.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
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

AppRouter.propTypes = {};

export default AppRouter;
