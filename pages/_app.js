import Layout from "../components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import AppProvider from "../context/context";
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </AppProvider>
    </SessionProvider>
  );
}

export default MyApp;
