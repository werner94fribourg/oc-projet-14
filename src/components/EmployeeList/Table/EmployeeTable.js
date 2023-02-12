import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { TablePagination } from '@mui/material';
import Input from '../../AddEmployee/Input/Input';
import { getArrayCopy, sortEmployeeArray } from '../../../utils/helpers';
import styles from './EmployeeTable.module.scss';
import Head from '../TableHead/TableHead';
import TableData from './TableData/TableData';

const paperStyles = { width: '90%', marginTop: '10px', marginBottom: '10px' };

const EmployeeTable = () => {
  const employees = useSelector(state => state.employees.employees);

  const employeesCopy = getArrayCopy(employees);

  const [selectedField, setSelectedField] = useState(-1);
  const [ascending, setAscending] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState(employeesCopy);

  useEffect(() => {
    const employeesCopy = getArrayCopy(employees);
    if (selectedField !== -1) {
      const sortedArray = sortEmployeeArray(
        employeesCopy,
        selectedField,
        ascending
      );
      setRows(sortedArray);
    } else setRows(employeesCopy);
  }, [employees, selectedField, ascending]);

  const requestSearch = searchedVal => {
    const filteredRows = employeesCopy.filter(row => {
      return row.firstName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
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

export default EmployeeTable;
