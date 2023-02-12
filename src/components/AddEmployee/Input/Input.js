import { InputDate } from '@werner94fribourg/datepicker';
import React from 'react';
import styles from './Input.module.scss';
import Select from './Select/Select';

const Input = props => {
  const { id, title, type, errorMessage, inputStyles, labelStyles } = props;
  const propsCopy = { ...props };
  delete propsCopy['id'];
  delete propsCopy['title'];
  delete propsCopy['type'];
  delete propsCopy['errorMessage'];
  delete propsCopy['inputStyles'];
  delete propsCopy['labelStyles'];

  const blurHandler = event => {
    const { target } = event;
    const invalid = target.dataset.invalid;
    if (invalid === undefined) return;

    target.dataset.invalid = target.value === '' ? true : false;
  };

  let input;
  switch (type) {
    case 'date':
      input = <InputDate name={id} {...propsCopy} />;
      break;
    case 'select':
      input = <Select name={id} {...propsCopy} />;
      break;
    default:
      input = (
        <input name={id} onBlur={blurHandler} type={type} {...propsCopy} />
      );
      break;
  }

  return (
    <div style={inputStyles}>
      <label className={styles.label} style={labelStyles} htmlFor={id}>
        {title}
      </label>
      {input}
      <div className={styles['err-message']}>{errorMessage}</div>
    </div>
  );
};

export default Input;
