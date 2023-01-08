import Layout from "../components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import AppProvider from "../context/context";

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
