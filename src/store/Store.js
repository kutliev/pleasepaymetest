import { observable, action, computed } from 'mobx';
import Country from './models/Country';
import Currency from './models/Currency';
import apiConfig from './config.json';

class Store {
  @observable countryList = [];
  @observable currencyList = [];
  @observable selectedCountry = new Country();
  @observable selectedCurrency = new Currency();
  @observable error = '';

  @computed get json() {
    return JSON.stringify(this);
  }

  @action
  loadCountryData() {
    fetch(apiConfig.apiBase + apiConfig.apiCountries)
      .then(response => response.json())
      .then((data) => {
        this.countryList = data.items.map(item =>
          // eslint-disable-next-line no-underscore-dangle
          new Country(item._id, item.translations.en, item.preferredCurrency.id));
      })
      .catch((error) => {
        this.error = JSON.stringify(error);
      });
  }

  @action
  loadCurrencyData() {
    fetch(apiConfig.apiBase + apiConfig.apiCurrencies)
      .then(response => response.json())
      .then((data) => {
        this.currencyList = data.items.map(item =>
        // eslint-disable-next-line no-underscore-dangle
          new Currency(item._id, item.translations.en));
      })
      .catch((error) => {
        this.error = JSON.stringify(error);
      });
  }

  @action
  setSelectedCountry(countryId) {
    const country = this.findObject(this.countryList, countryId);
    if (!country) {
      return;
    }
    this.selectedCountry = country;
    this.setSelectedCurrency(country.currencyId);
  }

  @action
  setSelectedCurrency(currencyId) {
    const currency = this.findObject(this.currencyList, currencyId);
    if (!currency) {
      return;
    }
    this.selectedCurrency = currency;
  }

  findObject = (list, objectId) =>
    list.filter(object => object.id === objectId)[0] || undefined;
}
export default Store;
