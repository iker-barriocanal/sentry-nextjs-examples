import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <div>
    //   Test wrapper
    <Component {...pageProps} />
    // </div>
  );
}

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyApp;
