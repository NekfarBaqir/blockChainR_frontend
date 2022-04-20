import '../styles/globals.css'
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

function MyApp({ Component, pageProps }) {
  function getLibrary(provider) {
    const library = new Web3Provider(provider);
    return library;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp
