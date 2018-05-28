import React from 'react';
import { Provider } from 'mobx-react';
import store from '../../store/';

import CountryCurrencySelector from '../../components/CountryCurrencySelector';
import styles from '../../styles/main.scss';

const App = () => (
  <Provider store={store}>
    <div className={styles.wrapper}>
      <CountryCurrencySelector />
    </div>
  </Provider>
);

export default App;
