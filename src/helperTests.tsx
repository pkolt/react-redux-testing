import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore, { AppState } from './store';

interface WrappingComponentProps {
  children?: React.ReactNode;
  storeState?: AppState;
  historyState?: string[];
}

export const WrappingComponent: React.FC<WrappingComponentProps> = (props: WrappingComponentProps) => {
  const { children, storeState, historyState } = props;
  const store = configureStore(storeState);

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={historyState} keyLength={0}>
        {children}
      </MemoryRouter>
    </Provider>
  );
};
