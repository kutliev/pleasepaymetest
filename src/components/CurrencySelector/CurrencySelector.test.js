import React from 'react';
import { shallow } from 'enzyme';
import Select from 'react-select';
import Store from '../../../__mocks__/storeMock';
import CurrencySelector from './CurrencySelector';

/* eslint-disable */

test('Currency Selector has Select', () => {

  const wrapper = shallow(
    <CurrencySelector.wrappedComponent store={Store}/>
  );

  expect(wrapper.find(Select).exists()).toBe(true);
});

test('Currency Selector should cause data load', () => {
  const loadData = jest.spyOn(Store, "loadCurrencyData");
  const wrapper = shallow(
    <CurrencySelector.wrappedComponent store={Store}/>
  );

  expect(loadData).toBeCalled();
});

test('Currency selector change should cause setting currency', () => {
  const setSelectedCurrency = jest.spyOn(Store, 'setSelectedCurrency');
  const wrapper = shallow(<CurrencySelector.wrappedComponent store={Store}/>);
  const select = wrapper.find(Select);
  select.simulate('change', { target: '2'});

  expect(setSelectedCurrency).toBeCalled();
});
