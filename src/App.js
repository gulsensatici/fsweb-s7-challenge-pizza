import React from "react";
import FirstPage from "./FirstPage";
import Main from "./Main";

import { BrowserRouter, Switch , Route} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
 <Route exact path="/">
  <FirstPage/>
 </Route>
 <Route path="/Main">
  <Main/>
 </Route>
  </Switch>
  </BrowserRouter>
  );
};
export default App;
