import { createModelSchema, serialize, list, object, primitive, deserialize } from 'serializr';
import Store from './Store';
import Country from './models/Country';
import Currency from './models/Currency';

const STORE = 'store';

// Country and Currency schemas set up by decorators

createModelSchema(
  Store,
  {
    countryList: list(object(Country)),
    currencyList: list(object(Currency)),
    selectedCountry: object(Country),
    selectedCurrency: object(Currency),
    error: primitive(),
  },
);

export const persistStore = (store, storage = localStorage) => {
  const serializedStore = serialize(store);
  const data = JSON.stringify(serializedStore);
  storage.setItem(STORE, data);
};

export const inflateStore = (storage = localStorage) => {
  const storedJson = JSON.parse(storage.getItem(STORE));
  const store = deserialize(Store, storedJson || {});
  return store;
};
