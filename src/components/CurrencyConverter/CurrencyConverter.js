import React from 'react';
import styles from './CurrencyConverter.module.scss';
import CurrencySelect from './CurrencySelect/CurrencySelect';

class CurrencyConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className={styles.currencyConverter}>
                <CurrencySelect />
                <p className={styles.paragraph}>to</p>
                <CurrencySelect />
            </div>
        );
    }
}

export default CurrencyConverter;