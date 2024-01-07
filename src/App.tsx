import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import { store } from './redux/store';
import { MainScreen } from './screens/mainScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainScreen />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
