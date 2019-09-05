import React from 'react';
import styles from './CurrencyRate.module.scss';
import moment from 'moment';

const currencyRate = (props) => (
    <p className={styles.CurrencyRate}>{props.fromAmount} {props.fromCurrency.toLowerCase()} = {props.toAmount} {props.toCurrency.toLowerCase()} <br></br> ({moment(moment.now()).format("DD.MM.YY")})</p>
);

export default currencyRate;
