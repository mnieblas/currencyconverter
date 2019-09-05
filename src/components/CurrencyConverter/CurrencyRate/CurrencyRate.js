import React from 'react';
import styles from './CurrencyRate.module.scss';

const currencyRate = (props) => (
    <p className={styles.CurrencyRate}>{props.fromAmount} {props.fromCurrency.toLowerCase()} = {props.toAmount} {props.toCurrency.toLowerCase()}</p>
);

export default currencyRate;
