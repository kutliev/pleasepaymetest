import React from 'react';
import { shallow } from 'enzyme';
import CountryCurrencySelector from './CountryCurrencySelector';
import CountrySelector from '../CountrySelector';
import CurrencySelector from '../CurrencySelector';

/* eslint-disable */

test('Country selector exists', () => {
  const wrapper = shallow(<CountryCurrencySelector />);
  expect(wrapper.find(CountrySelector).exists()).toBe(true);
});

test('Currency selector exists', () => {
  const wrapper = shallow(<CountryCurrencySelector />);
  expect(wrapper.find(CurrencySelector).exists()).toBe(true);
});
