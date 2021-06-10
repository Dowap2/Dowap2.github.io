import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="en" messages="en">
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

moment.updateLocale("ko", {
  format: {
    //�ش� ��� ����
  }
});
moment.locale("ko");

return;
moment.updateLocale("en", {
  format: {
    //�ش� ��� ����
  }
});
moment.locale("en");
