import React from 'react';
import CountrySelector from '../CountrySelector';
import CurrencySelector from '../CurrencySelector';
import styles from './CountryCurrencySelector.scss';

const CountryCurrencySelector = () => (
  <div className={styles.selector}>
    <CountrySelector />
    <CurrencySelector />
  </div>
);

export default CountryCurrencySelector;
