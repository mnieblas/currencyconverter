import React from 'react';
import Select from 'react-select';
import styles from './CurrencySelect.module.scss';

const currencySelect = (props) => {

    const options = [
        { value: 'usd', label: 'US DOLLARS' },
        { value: 'eur', label: 'EURO' },
        { value: 'bpd', label: 'BRITISH POUND' }
    ];

      return <Select 
      className={styles.currencySelect}
      classNamePrefix="currencySelect"
      options={options} />;

}

export default currencySelect;