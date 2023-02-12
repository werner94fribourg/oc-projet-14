import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { EMPLOYEES_KEYS } from '../../../../utils/globals';

const TableData = props => {
  const { employee } = props;

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {employee.id}
      </TableCell>
      {EMPLOYEES_KEYS.map(key => (
        <TableCell key={key} align="right">
          {employee[key]}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableData;
