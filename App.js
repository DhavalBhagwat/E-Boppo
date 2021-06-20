import React from "react";
import { Provider } from "react-redux";
import { MainNavigation } from "./src/config/router.js";
import configureStore from "./src/store/configureStore";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App();
