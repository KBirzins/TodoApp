import React from 'react';
import {Provider} from 'react-redux';

import configureStore from '../reducers';

export const ReduxProvider = ({children}) => (
  <Provider store={configureStore()}>{children}</Provider>
);
