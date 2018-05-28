import React, { Component } from 'react';
import Select from 'react-select';
import { observer, inject, PropTypes as MobxPropTypes } from 'mobx-react';
import { PropTypes } from 'prop-types';
import styles from '../../styles/main.scss';
import reactSelectStyles from '../../styles/react-select-style';
import Currency from '../../store/models/Currency';

@inject('store')
@observer
class CurrencySelector extends Component {
  componentDidMount() {
    this.props.store.loadCurrencyData();
  }

  handleChange = (selectedCurrency) => {
    this.props.store.setSelectedCurrency(selectedCurrency.value);
  }

  render() {
    const data = this.props.store.currencyList;
    const options = data && data.map(currency => ({
      value: currency.id,
      label: currency.title,
    }));
    const { selectedCurrency } = this.props.store;
    const selectedOption =
      (!selectedCurrency.title && !selectedCurrency.label)
        ? null
        : {
          label: selectedCurrency.title,
          value: selectedCurrency.id,
        };

    return (
      <div className={styles.row}>
        <div className={styles.label}>
          Currency
        </div>
        <div className={styles.selector}>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            styles={reactSelectStyles}
            options={options}
          />
        </div>
      </div>
    );
  }
}

CurrencySelector.wrappedComponent.propTypes = {
  store: PropTypes.shape({
    loadCountryData: PropTypes.func.isRequired,
    loadCurrencyData: PropTypes.func.isRequired,
    setSelectedCurrency: PropTypes.func.isRequired,
    currencyList: MobxPropTypes.observableArray.isRequired,
    selectedCurrency: PropTypes.instanceOf(Currency).isRequired,
  }).isRequired,
};

export default CurrencySelector;
