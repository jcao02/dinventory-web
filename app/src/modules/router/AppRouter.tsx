import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { InventoryNew } from '../inventory-new';


function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={InventoryNew} />
    </Router>
  );
}

export default AppRouter;
