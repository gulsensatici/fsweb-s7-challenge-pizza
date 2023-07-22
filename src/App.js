import React from "react";
import FirstPage from "./FirstPage";
import Main from "./Main";

import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
  <Route exact path="/">
    <FirstPage/>
  </Route>
      
    </BrowserRouter>
  );
};
export default App;
