import React, { useEffect } from 'react';
import DropdownSelect from 'react-dropdown-select';

const Select = props => {
  const { name, options } = props;

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
        name={name}
        options={options}
        values={[]}
        onChange={changeHandler}
      />
    </React.Fragment>
  );
};

export default Select;
