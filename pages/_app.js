import '../styles/globals.css'
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  function MyApp({ Component, pageProps }) {
    function getLibrary(provider) {
      const library = new Web3Provider(provider);
      return library;
    }

    return (
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Web3ReactProvider>
    );
  }

export default MyApp
