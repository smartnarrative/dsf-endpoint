import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DSFRoutes } from './dsf/components/DSFRoutes';

export const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <DSFRoutes />
    </React.Fragment>
  );
}
