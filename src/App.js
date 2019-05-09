import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
