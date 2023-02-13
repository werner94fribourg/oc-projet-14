import { EMPLOYEE_FIELDS } from '../../../utils/globals';
import FilteringCell from './FilteringCell/FilteringCell';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';

/**
 * Component representing the header with all the fields in the employee table.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
const Head = props => {
  const { filterHandler, selectedField, ascending } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        {EMPLOYEE_FIELDS.map((field, index) => (
          <FilteringCell
            key={field}
            num={index}
            title={field}
            filterHandler={filterHandler}
            selectedField={selectedField}
            ascending={ascending}
          />
        ))}
      </TableRow>
    </TableHead>
  );
};

Head.propTypes = {
  /** variable representing the actual ordered field (-1 if none selected) */
  selectedField: PropTypes.number.isRequired,
  /** boolean asserting if the ordered field is in ascending (true) or descending (false) order */
  ascending: PropTypes.bool.isRequired,
  /** handler function used to order the employees by the selected field when the user clicks on it */
  filterHandler: PropTypes.func.isRequired,
};

export default Head;
