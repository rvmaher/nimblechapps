import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainNav from './src/navigation';
import store, {persistor} from './src/store/store';

const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <ReduxProvider store={store}>
        <MainNav />
      </ReduxProvider>
    </PersistGate>
  );
};

export default App;
