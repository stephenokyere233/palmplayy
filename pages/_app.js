import Layout from "../components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
