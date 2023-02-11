import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./components/AppRouter/AppRouter";
import { getAllEmployees } from "./store/slice/employee";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllEmployees(dispatch);
  }, [dispatch]);
  return <AppRouter />;
}

export default App;
