import React from 'react';
import Select from 'react-select';
import styles from './CurrencySelect.module.scss';

const options = [
    { value: 'EUR', label: 'EURO' },
    { value: 'USD', label: 'US DOLLAR' },
    { value: 'GBP', label: 'POUND STERLING' },
    { value: 'JPY', label: 'JAPANESE YEN' },
    { value: 'CZK', label: 'CZECH KORUNA' },
    { value: 'DKK', label: 'DANISH KRONE' },
    { value: 'HUF', label: 'HUNGARIAN FORINT' },
    { value: 'CHF', label: 'SWISS FRANC' },
    { value: 'CAD', label: 'CANADIAN DOLLAR' },
    { value: 'CNY', label: 'CHINESE YUAN' },
    { value: 'AUD', label: 'AUSTRALIAN DOLLAR' },
    { value: 'RUB', label: 'RUSSIAN ROUBLE' },
];

class CurrencySelect extends React.Component {

    state = {
        selectedOption: {
            value: this.props.currency,
            label: this.props.label
        }
    }

    currencySelectionHandler = (selectedOption) => {
        console.log(selectedOption);
        this.setState({
            selectedOption: selectedOption
        });
        this.props.updateCurrency(selectedOption);
    }


    render() {    
        return (
            <Select 
            className={styles.currencySelect}
            classNamePrefix="currencySelect"
            options={options} 
            value={this.state.selectedOption}
            onChange={this.currencySelectionHandler}
            noOptionsMessage={() => 'Currency not found'}
            isSearchable/>
        );
    }

}

export default CurrencySelect;