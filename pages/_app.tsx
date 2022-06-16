import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import '@admiral-ds/fonts/VTBGroupUI.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LIGHT_THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
