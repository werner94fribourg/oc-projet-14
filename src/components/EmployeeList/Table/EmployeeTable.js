import { filterEmployees } from '../../../store/slice/employee';
import { getArrayCopy, sortEmployeeArray } from '../../../utils/helpers';
import Input from '../../AddEmployee/Input/Input';
import Head from '../TableHead/TableHead';
import styles from './EmployeeTable.module.scss';
import TableData from './TableData/TableData';
import { TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * styles associated with the table wrapper
 */
const paperStyles = { width: '90%', marginTop: '10px', marginBottom: '10px' };

/**
 * Component rendering the table of existing users in the application.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
const EmployeeTable = () => {
  const filteredEmployees = useSelector(
    state => state.employees.filteredEmployees
  );
  const dispatch = useDispatch();

  const [selectedField, setSelectedField] = useState(-1);
  const [ascending, setAscending] = useState(true);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const employeesCopy = getArrayCopy(filteredEmployees);
    if (selectedField !== -1) {
      const sortedArray = sortEmployeeArray(
        employeesCopy,
        selectedField,
        ascending
      );
      setRows(sortedArray);
    } else setRows(employeesCopy);
  }, [filteredEmployees, selectedField, ascending]);

  const requestSearch = searchedVal => {
    filterEmployees(searchedVal, dispatch);
  };

  const searchHandler = event => {
    requestSearch(event.target.value);
  };

  const changePageHandler = (_, newPage) => {
    setPage(newPage);
  };

  const changeRowsPerPageHandler = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filterHandler = value => {
    if (value !== selectedField) {
      setAscending(true);
      setSelectedField(value);
    } else {
      if (!ascending) {
        setSelectedField(-1);
      } else {
        setAscending(ascending => !ascending);
      }
    }
  };

  return (
    <React.Fragment>
      <div className={styles.search}>
        <Input type="text" title="Search: " onChange={searchHandler} />
      </div>
      <Paper sx={paperStyles}>
        <TableContainer>
          <Table stickyHeader aria-label="simple table">
            <Head
              filterHandler={filterHandler}
              selectedField={selectedField}
              ascending={ascending}
            />
            <TableBody>
              {rows.map(employee => (
                <TableData key={employee.id} employee={employee} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={changePageHandler}
          onRowsPerPageChange={changeRowsPerPageHandler}
        />
      </Paper>
    </React.Fragment>
  );
};

EmployeeTable.propTypes = {};

export default EmployeeTable;
