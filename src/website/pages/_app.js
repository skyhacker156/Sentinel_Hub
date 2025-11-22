// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

function SentinelWebsite({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default SentinelWebsite;
