import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import Body from "./SortingVisualizer/body/Body";
import { ConfigureStore } from "./redux/configureStore";
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/visual-sorting" component={Body} />
          <Redirect to="/visual-sorting" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;

// <Switch>
// <Route path="/:sort" component={renderPage} />
// <Route path="/" component={renderPage}/>
// </Switch>
