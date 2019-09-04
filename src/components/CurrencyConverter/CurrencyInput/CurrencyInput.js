import React from 'react';
import styles from './CurrencyInput.module.scss';

class CurrencyInput extends React.Component {

    render() {
        return (
            <input value={this.props.value} className={[styles.CurrencyInput, this.props.position === 'left' ? styles.InputLeft : null].join(' ')} type="number"/>
        );
    }

}

export default CurrencyInput;
