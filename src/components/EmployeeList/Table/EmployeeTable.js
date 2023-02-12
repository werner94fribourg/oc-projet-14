import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { TablePagination } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../../AddEmployee/Input/Input';

const sortEmployeeArray = (employees, index, order) => {
  const newArray = [...employees];

  switch (index) {
    case 0:
      newArray.sort((a, b) => (a.firstName >= b.firstName ? 1 : -1));
      break;
    case 1:
      newArray.sort((a, b) => (a.lastName >= b.lastName ? 1 : -1));
      break;
    case 2:
      newArray.sort((a, b) => (a.birthDate >= b.birthDate ? 1 : -1));
      break;
    case 3:
      newArray.sort((a, b) => (a.startDate >= b.startDate ? 1 : -1));
      break;
    case 4:
      newArray.sort((a, b) => (a.street >= b.street ? 1 : -1));
      break;
    case 5:
      newArray.sort((a, b) => (a.city >= b.city ? 1 : -1));
      break;
    case 6:
      newArray.sort((a, b) => (a.state >= b.state ? 1 : -1));
      break;
    case 7:
      newArray.sort((a, b) => (a.zipCode >= b.zipCode ? 1 : -1));
      break;
    case 8:
      newArray.sort((a, b) => (a.department >= b.department ? 1 : -1));
      break;
    default:
      break;
  }

  if (!order) {
    const reverse = [...newArray].reverse();

    return reverse;
  }

  return newArray;
};

const EmployeeTable = () => {
  const employees = useSelector(state => state.employees.employees);

  const employeesCopy = employees.map(employee => {
    return {
      ...employee,
    };
  });

  const [selectedField, setSelectedField] = useState(-1);
  const [ascending, setAscending] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState(employeesCopy);

  useEffect(() => {
    const employeesCopy = employees.map(employee => {
      return {
        ...employee,
      };
    });
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

  const changePageHandler = (event, newPage) => {
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
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', width: '90%' }}
      >
        <Input
          type="text"
          title="Search: "
          onChange={searchHandler}
          inputStyles={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            fontSize: '1.6rem',
          }}
          labelStyles={{ margin: 0 }}
          style={{ width: '185px' }}
        />
      </div>
      <Paper sx={{ width: '90%', marginTop: '10px', marginBottom: '10px' }}>
        <TableContainer>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: 'pointer' }}
                  onClick={filterHandler.bind(this, 0)}
                >
                  First Name{' '}
                  {selectedField !== 0 && <FontAwesomeIcon icon={faSort} />}
                  {selectedField === 0 && ascending && (
                    <FontAwesomeIcon icon={faSortUp} />
                  )}
                  {selectedField === 0 && !ascending && (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: 'pointer' }}
                  onClick={filterHandler.bind(this, 1)}
                >
                  Last Name{' '}
                  {selectedField !== 1 && <FontAwesomeIcon icon={faSort} />}
                  {selectedField === 1 && ascending && (
                    <FontAwesomeIcon icon={faSortUp} />
                  )}
                  {selectedField === 1 && !ascending && (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: 'pointer' }}
                  onClick={filterHandler.bind(this, 2)}
                >
                  Birth Date{' '}
                  {selectedField !== 2 && <FontAwesomeIcon icon={faSort} />}
                  {selectedField === 2 && ascending && (
                    <FontAwesomeIcon icon={faSortUp} />
                  )}
                  {selectedField === 2 && !ascending && (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: 'pointer' }}
                  onClick={filterHandler.bind(this, 3)}
                >
                  Start Date{' '}
                  {selectedField !== 3 && <FontAwesomeIcon icon={faSort} />}
                  {selectedField === 3 && ascending && (
                    <FontAwesomeIcon icon={faSortUp} />
                  )}
                  {selectedField === 3 && !ascending && (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: 'pointer' }}
                  onClick={filterHandler.bind(this, 4)}
                >
                  Street{' '}
                  {selectedField !== 4 && <FontAwesomeIcon icon={faSort} />}
                  {selectedField === 4 && ascending && (
                    <FontAwesomeIcon icon={faSortUp} />
                  )}
                  {selectedField === 4 && !ascending && (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: 'pointer' }}
                  onClick={filterHandler.bind(this, 5)}
                >
                  City{' '}
                  {selectedField !== 5 && <FontAwesomeIcon icon={faSort} />}
                  {selectedField === 5 && ascending && (
                    <FontAwesomeIcon icon={faSortUp} />
                  )}
                  {selectedField === 5 && !ascending && (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: 'pointer' }}
                  onClick={filterHandler.bind(this, 6)}
                >
                  State{' '}
                  {selectedField !== 6 && <FontAwesomeIcon icon={faSort} />}
                  {selectedField === 6 && ascending && (
                    <FontAwesomeIcon icon={faSortUp} />
                  )}
                  {selectedField === 6 && !ascending && (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: 'pointer' }}
                  onClick={filterHandler.bind(this, 7)}
                >
                  Zip Code{' '}
                  {selectedField !== 7 && <FontAwesomeIcon icon={faSort} />}
                  {selectedField === 7 && ascending && (
                    <FontAwesomeIcon icon={faSortUp} />
                  )}
                  {selectedField === 7 && !ascending && (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: 'pointer' }}
                  onClick={filterHandler.bind(this, 8)}
                >
                  Department{' '}
                  {selectedField !== 8 && <FontAwesomeIcon icon={faSort} />}
                  {selectedField === 8 && ascending && (
                    <FontAwesomeIcon icon={faSortUp} />
                  )}
                  {selectedField === 8 && !ascending && (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.firstName}</TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.birthDate}</TableCell>
                  <TableCell align="right">{row.startDate}</TableCell>
                  <TableCell align="right">{row.street}</TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.state}</TableCell>
                  <TableCell align="right">{row.zipCode}</TableCell>
                  <TableCell align="right">{row.department}</TableCell>
                </TableRow>
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
