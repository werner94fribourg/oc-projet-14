import AppRouter from './components/AppRouter/AppRouter';
import { getAllEmployees } from './store/slice/employee';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

/**
 * The root of the application.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllEmployees(dispatch);
  }, [dispatch]);
  return <AppRouter />;
};

App.propTypes = {};

export default App;
