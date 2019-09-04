import React from 'react';
import styles from './CurrencyRate.module.scss';

const currencyRate = (props) => (
    <p className={styles.CurrencyRate}>{props.fromAmount} {props.fromCurrency} = {props.toAmount} {props.toCurrency}</p>
);

export default currencyRate;
