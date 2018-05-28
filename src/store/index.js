import { autorun } from 'mobx';
import { persistStore, inflateStore } from './storeProcessor';

const store = inflateStore();
export default store;

autorun(() => {
  persistStore(store);
});
