import React from 'react';
import Select from 'react-select';
import styles from './CurrencySelect.module.scss';

const currencySelect = (props) => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

      return <Select 
      className={styles.currencySelect}
      classNamePrefix="currencySelect"
      options={options} />;

}

export default currencySelect;