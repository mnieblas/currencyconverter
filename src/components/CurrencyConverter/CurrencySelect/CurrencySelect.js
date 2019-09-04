import React from 'react';
import Select from 'react-select';
import styles from './CurrencySelect.module.scss';

const options = [
    { value: 'EUR', label: 'EURO' },
    { value: 'USD', label: 'US DOLLAR' },
    { value: 'GBP', label: 'POUND STERLING' },
    { value: 'JPY', label: 'JAPANESE YEN' }
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
        })
    }


    render() {    

        // let selectedOption = this.state.selectedOption;
        // for (let index = 0; index < options.length; index++) {
        //     if(options[index].value === this.props.currency) {
        //         selectedOption = options[index];
        //         console.log(selectedOption);
        //     }
        // }

        return (
            <Select 
            className={styles.currencySelect}
            classNamePrefix="currencySelect"
            options={options} 
            value={this.state.selectedOption}
            onChange={this.currencySelectionHandler}/>
        );
    }

}

export default CurrencySelect;