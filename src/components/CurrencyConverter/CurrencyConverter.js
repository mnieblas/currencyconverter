import React from 'react';
import styles from './CurrencyConverter.module.scss';
import CurrencySelect from './CurrencySelect/CurrencySelect';
import CurrencyInput from './CurrencyInput/CurrencyInput';
import CurrencyRate from './CurrencyRate/CurrencyRate';
import axios from 'axios';

class CurrencyConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fromCurrencyValue: 'EUR',
            fromCurrencyLabel: 'EURO',
            toCurrencyValue: 'USD',
            toCurrencyLabel: 'US DOLLAR'
        }
    }

    componentDidMount() {
        axios.get('/latest?base=' + this.state.fromCurrencyValue + '&symbols=' + this.state.toCurrencyValue)
             .then(response => {
                 console.log(response);
             }).catch(error => {
                 console.log(error);
             });
    }

    render() {
        return (
            <div className={styles.CurrencyConverter}>
                <div className={styles.SelectsContainer}>
                    <CurrencySelect currency={this.state.fromCurrencyValue} label={this.state.fromCurrencyLabel}/>
                    <p className={styles.Paragraph}>to</p>
                    <CurrencySelect currency={this.state.toCurrencyValue} label={this.state.toCurrencyLabel}/>
                </div>
                <div className={styles.SelectsContainer}>
                    <CurrencyInput position="left" value="12.45"/>
                    <p className={styles.ParagraphBigger}>=</p>
                    <CurrencyInput position="right" value="9.25"/>
                </div>
                <div className={styles.SelectsContainer}>
                    <CurrencyRate fromAmount="1" fromCurrency="usd" toAmount="0,277872" toCurrency="eur" />
                </div>
            </div>
        );
    }
}

export default CurrencyConverter;