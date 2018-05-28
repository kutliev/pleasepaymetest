import React from 'react';
import { shallow } from 'enzyme';
import Select from 'react-select';
import Store from '../../../__mocks__/storeMock';
import CountrySelector from './CountrySelector';

/* eslint-disable */

test('Country Selector has Select', () => {
  const wrapper = shallow(<CountrySelector.wrappedComponent store={Store}/>);

  expect(wrapper.find(Select).exists()).toBe(true);
});

test('Country Selector should cause data load', () => {
  const loadData = jest.spyOn(Store, "loadCountryData");
  const wrapper = shallow(<CountrySelector.wrappedComponent store={Store}/>);

  expect(loadData).toBeCalled();
});

test('Country selector change should cause setting country', () => {
  const setSelectedCountry = jest.spyOn(Store, 'setSelectedCountry');
  const wrapper = shallow(<CountrySelector.wrappedComponent store={Store}/>);
  const select = wrapper.find(Select);
  select.simulate('change', { target: '2'});

  expect(setSelectedCountry).toBeCalled();
});
