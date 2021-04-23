import { Header }  from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import '../styles/globals.scss'
import styles from '../styles/app.module.scss';
import { HeaderContextProvider } from '../contexts/headerContext';

function MyApp({ Component, pageProps }) {
  return (
    <HeaderContextProvider>
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
    </HeaderContextProvider>
  );
}

export default MyApp
