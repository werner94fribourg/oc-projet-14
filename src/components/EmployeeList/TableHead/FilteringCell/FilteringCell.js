import {
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableCell from '@mui/material/TableCell';
import PropTypes from 'prop-types';

/**
 * Associated styles with the filtering cell
 */
const titleStyle = {
  cursor: 'pointer',
};

/**
 * Component representing a field cell in the title that will order the table when we click on it.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
const FilteringCell = props => {
  const { filterHandler, selectedField, ascending, num, title } = props;
  return (
    <TableCell
      align="right"
      sx={titleStyle}
      onClick={filterHandler.bind(this, num)}
    >
      {title} {selectedField !== num && <FontAwesomeIcon icon={faSort} />}
      {selectedField === num && ascending && (
        <FontAwesomeIcon icon={faSortUp} />
      )}
      {selectedField === num && !ascending && (
        <FontAwesomeIcon icon={faSortDown} />
      )}
    </TableCell>
  );
};

FilteringCell.propTypes = {
  /** the index of the field in the array of employees' field */
  num: PropTypes.number.isRequired,
  /** the displayed value of the field */
  title: PropTypes.string.isRequired,
  /** variable representing the actual ordered field (-1 if none selected) */
  selectedField: PropTypes.number.isRequired,
  /** boolean asserting if the ordered field is in ascending (true) or descending (false) order */
  ascending: PropTypes.bool.isRequired,
  /** handler function used to order the employees by the selected field when the user clicks on it */
  filterHandler: PropTypes.func.isRequired,
};

export default FilteringCell;
