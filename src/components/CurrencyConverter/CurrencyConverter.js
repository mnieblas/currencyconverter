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
            toCurrencyLabel: 'US DOLLAR',
            fromBase: 1,
            toBase: 1,
            fromValue: 1,
            toValue: 1
        }
    }

    componentDidMount() {
        axios.get('/latest?base=' + this.state.fromCurrencyValue + '&symbols=' + this.state.toCurrencyValue)
             .then(response => {
                 this.setState({
                    toBase: response.data.rates[this.state.toCurrencyValue],
                    toValue: response.data.rates[this.state.toCurrencyValue]
                 });
             }).catch(error => {
                 console.log(error);
             });
    }

    currencyFromInputChangeHandler = (event) => {      
          const fromValue = event.target.value;
          this.setState((prevState) => {
            return {
                fromValue: fromValue,
                toValue: (fromValue * prevState.toBase).toFixed(2)
            }
          });
      
    }

    currencyToInputChangeHandler = (event) => {      
        const toValue = event.target.value;
        this.setState((prevState) => {
          return {
              toValue: toValue,
              fromValue: (toValue / prevState.toBase).toFixed(2)
          }
        });
    
    }

    currencyFromSelectChangeHandler = (selectedOption) => {

        if (this.state.toCurrencyValue === 'EUR' && selectedOption.value === 'EUR') {
            this.setState((prevState) => {
                return {
                   fromCurrencyValue: selectedOption.value,
                   toBase: 1,
                   toValue: prevState.fromValue
                }
            });
        } else {
            axios.get('/latest?base=' + selectedOption.value + '&symbols=' + this.state.toCurrencyValue)
            .then(response => {
                this.setState((prevState) => {
                    return {
                       fromCurrencyValue: selectedOption.value,
                       toBase: response.data.rates[this.state.toCurrencyValue].toFixed(4),
                       toValue: (prevState.fromValue * response.data.rates[this.state.toCurrencyValue]).toFixed(4)
                    }
                });
            }).catch(error => {
                console.log(error);
            });
        }
    }

    currencyToSelectChangeHandler = (selectedOption) => {
        // avoiding EUR vs EUR API error 
        if (this.state.fromCurrencyValue === 'EUR' && selectedOption.value === 'EUR') {
            this.setState((prevState) => {
                return {
                   toCurrencyValue: selectedOption.value,
                   toBase: 1,
                   toValue: prevState.fromValue
                }
            });
        } else {
            axios.get('/latest?base=' + this.state.fromCurrencyValue + '&symbols=' + selectedOption.value)
            .then(response => {
                this.setState((prevState) => {
                    return {
                       toCurrencyValue: selectedOption.value,
                       toBase: response.data.rates[selectedOption.value].toFixed(4),
                       toValue: (prevState.fromValue * response.data.rates[selectedOption.value]).toFixed(4)
                    }
                });
            }).catch(error => {
                console.log(error);
            });
        }
    }
    
    render() {
        return (
            <div className={styles.CurrencyConverter}>
                <div className={styles.SelectsContainer}>
                    <CurrencySelect currency={this.state.fromCurrencyValue} label={this.state.fromCurrencyLabel} updateCurrency={this.currencyFromSelectChangeHandler}/>
                    <p className={styles.Paragraph}>to</p>
                    <CurrencySelect currency={this.state.toCurrencyValue} label={this.state.toCurrencyLabel} updateCurrency={this.currencyToSelectChangeHandler}/>
                </div>
                <div className={styles.SelectsContainer}>
                    <CurrencyInput position="left" value={this.state.fromValue} changed={this.currencyFromInputChangeHandler}/>
                    <p className={styles.ParagraphBigger}>=</p>
                    <CurrencyInput position="right" value={this.state.toValue} changed={this.currencyToInputChangeHandler}/>
                </div>
                <div className={styles.SelectsContainer}>
                    <CurrencyRate fromAmount={this.state.fromBase} fromCurrency={this.state.fromCurrencyValue} toAmount={this.state.toBase} toCurrency={this.state.toCurrencyValue} />
                </div>
            </div>
        );
    }
}

export default CurrencyConverter;