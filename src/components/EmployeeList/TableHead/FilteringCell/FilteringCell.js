import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import TableCell from '@mui/material/TableCell';

const titleStyle = {
  cursor: 'pointer',
};

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

export default FilteringCell;
