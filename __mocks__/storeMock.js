import Store from '../src/store/Store';
import Country from '../src/store/models/Country';
import Currency from '../src/store/models/Currency';

const store = new Store();
const testCountry = new Country('1', 'TestCountry', '1');
const testCurrency = new Currency('1', 'TestCurrency');
store.countryList = [testCountry];
store.currencyList = [testCurrency];
store.selectedCountry = testCountry;
store.selectedCurrency = testCurrency;

store.loadCountryData = () => {};
store.loadCurrencyData = () => {};
store.setSelectedCountry = () => {};
store.setSelectedCurrency = () => {};

export default store;
