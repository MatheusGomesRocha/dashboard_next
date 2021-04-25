import { Header }  from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import '../styles/globals.scss'
import styles from '../styles/app.module.scss';
import { NotificationContextProvider } from '../contexts/NotificationContext';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
    </NotificationContextProvider>
  );
}

export default MyApp
