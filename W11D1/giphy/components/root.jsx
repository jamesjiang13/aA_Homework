import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';


const Root = ({store}) => (
  <Provider store={store}>
    {/* <h1>HELLO IT'S WORKING!!!!!</h1> */}
    <GiphysSearchContainer />
  </Provider>
);


export default Root;
