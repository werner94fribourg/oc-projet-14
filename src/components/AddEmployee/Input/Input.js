import styles from './Input.module.scss';
import Select from './Select/Select';
import _uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { InputDate } from 'werner94fribourg-datepicker';

/**
 * Component representing an input and its associated label.
 * The component can accept, in addition to the ones required in this description, all other props you normally set on a input or select element.
 * For a select type, we need to pass an array of the options we want to display.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
const Input = props => {
  const { id, title, type, errorMessage } = props;
  const propsCopy = { ...props };
  delete propsCopy['id'];
  delete propsCopy['title'];
  delete propsCopy['type'];
  delete propsCopy['errorMessage'];
  const [inputId] = useState(_uniqueId('employee-'));
  const blurHandler = event => {
    const { target } = event;
    const invalid = target.dataset.invalid;
    if (invalid === undefined) return;

    target.dataset.invalid = target.value === '' ? true : false;
  };

  let input;
  switch (type) {
    case 'date':
      input = <InputDate id={inputId} name={id} {...propsCopy} />;
      break;
    case 'select':
      input = <Select id={inputId} name={id} {...propsCopy} />;
      break;
    default:
      input = (
        <input
          id={inputId}
          name={id}
          onBlur={blurHandler}
          type={type}
          {...propsCopy}
        />
      );
      break;
  }

  return (
    <div>
      <label className={styles.label} htmlFor={inputId}>
        {title}
      </label>
      {input}
      <div className={styles['err-message']}>{errorMessage}</div>
    </div>
  );
};

Input.propTypes = {
  /** the name of the field */
  id: PropTypes.string.isRequired,
  /** the title displayed in the label */
  title: PropTypes.string.isRequired,
  /** the type of the input (date, text, select, ...) */
  type: PropTypes.string.isRequired,
  /** the error message to display when the validation doesn't work */
  errorMessage: PropTypes.string.isRequired,
};

export default Input;
