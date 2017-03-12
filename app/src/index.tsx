import * as React from "react";
import * as ReactDOM from "react-dom";

// AppContainer is a necessary wrapper component for HMR
// We use require because TypeScript type warning,
// tslint:disable
const { AppContainer } = require("react-hot-loader");
// tslint:enable

/*
  Main App Container
 */
import App from "./containers/App/App";

// Render function containing the HMR AppContainer
const render = (Component: any) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        // HTML root element for React app
        document.getElementById("reactContainer")
    );
};

// More info: https://blog.josequinto.com/2017/01/20/getting-react-to-load-polyfills-only-when-needed/
// tslint:disable
const { polyfillLoader } = require("polyfill-io-feature-detection");
// tslint:enable
polyfillLoader({
    features: "Promise",
    onCompleted: main
});

function main() {
    render(App);

    // TypeScript declaration for module.hot
    // declare var module: { hot: any };
    // Hot Module Replacement API
    if ((module as any).hot) {
        (module as any).hot.accept("./containers/App/App", () => {
            // If we receive a HMR request for our App container,
            // then reload it using require (we can't do this dynamically with import)
            const NextApp = require("./containers/App/App").default;
            render(NextApp);
        });
    }
}
