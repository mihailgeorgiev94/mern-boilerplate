import React from 'react';
import { Provider } from 'react-redux'

import { store } from './store'
import Items from './components/Items'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Items/>
      </div>
    </Provider>
  );
}

export default App;
