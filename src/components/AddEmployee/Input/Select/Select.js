import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import DropdownSelect from 'react-dropdown-select';

/**
 * Component representing a custom select component.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
const Select = props => {
  const { id, name, options } = props;

  const changeHandler = () => {
    const input = document.querySelector(`input[name=${name}]`);

    if (input.dataset.invalid === undefined) return;
    const invalid = input.value === '' ? true : false;

    const dropdown = input.closest('.react-dropdown-select');
    const wrapper = dropdown.parentElement;

    input.dataset.invalid = invalid;
    dropdown.dataset.invalid = invalid;
    wrapper.dataset.invalid = invalid;
  };

  useEffect(() => {
    const input = document.querySelector(`input[name=${name}]`);

    input.dataset.type = 'select';
  }, [name]);

  return (
    <React.Fragment>
      <button className="remove-btn" style={{ display: 'none' }}></button>
      <DropdownSelect
        clearable
        id={id}
        name={name}
        options={options}
        values={[]}
        onChange={changeHandler}
      />
    </React.Fragment>
  );
};

Select.propTypes = {
  /** the id of the select */
  id: PropTypes.string.isRequired,
  /** the name of the field in validation */
  name: PropTypes.string.isRequired,
  /** the array of options we can select */
  options: PropTypes.array.isRequired,
};

export default Select;
