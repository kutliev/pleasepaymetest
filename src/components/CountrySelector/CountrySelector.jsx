import React, { Component } from 'react';
import Select from 'react-select';
import { observer, inject, PropTypes as MobxPropTypes } from 'mobx-react';
import { PropTypes } from 'prop-types';
import styles from '../../styles/main.scss';
import reactSelectStyles from '../../styles/react-select-style';
import Country from '../../store/models/Country';

@inject('store')
@observer
class CountrySelector extends Component {
  componentDidMount() {
    this.props.store.loadCountryData();
  }

  handleChange = (e) => {
    this.props.store.setSelectedCountry(e.value);
  }

  render() {
    const { selectedCountry } = this.props.store;
    const data = this.props.store.countryList;
    const options = data && data.map(country => ({
      value: country.id,
      label: country.title,
    }));
    const selectedOption =
      (!selectedCountry.title && !selectedCountry.id)
        ? null
        : {
          label: selectedCountry.title,
          value: selectedCountry.id,
        };

    return (
      <div className={styles.row}>
        <div className={styles.label}>
          Country
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

CountrySelector.wrappedComponent.propTypes = {
  store: PropTypes.shape({
    loadCountryData: PropTypes.func.isRequired,
    setSelectedCountry: PropTypes.func.isRequired,
    countryList: MobxPropTypes.observableArray.isRequired,
    selectedCountry: PropTypes.instanceOf(Country).isRequired,
  }).isRequired,
};

export default CountrySelector;
