import React from 'react';
import './App.css';

// we need createStore from redux
import {createStore} from 'redux';
// reducer
import {mantras} from './Reducers';
// we need our smart componenets
import MantraForm from './containers/MantraFormContainer';
import MantraList from './containers/MantraListContainer';
// we need the provider from react-redux
import {Provider} from 'react-redux';


const store = createStore(mantras);

function App() {
  return (
      <div>
        <Provider store={store}>
          <MantraForm/>
          <MantraList/>
        </Provider>
      </div>
  );
}

export default App;
