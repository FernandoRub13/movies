
import Header from "components/Header";

import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import ContextWrapper from "../components/ContextWrapper";


function MyApp({ Component, pageProps, navigation }) {
  console.log(navigation);
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={navigation} >
          <Header />
        </ContextWrapper>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const res = await fetch(`http://165.232.136.226:1337/navigations`);
  const navigation = await res.json();

  return { navigation };
};

export default MyApp;
