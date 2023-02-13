import { EMPLOYEES_KEYS } from '../../../../utils/globals';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';

/**
 * Component representing an employee line in the table.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
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

TableData.propTypes = {
  /** employe we want to display in the entry */
  employee: PropTypes.object.isRequired,
};

export default TableData;
