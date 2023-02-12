import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import FilteringCell from './FilteringCell/FilteringCell';
import { EMPLOYEE_FIELDS } from '../../../utils/globals';

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

export default Head;
