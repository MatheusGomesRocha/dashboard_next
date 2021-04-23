import { useContext } from 'react';
import { HeaderContext } from '../../contexts/headerContext';
import styles from './styles.module.scss';

export function Header() {
    const { page } = useContext(HeaderContext);

    return(
        <div className={styles.headerContainer}>
            <h1>{page}</h1>

            <div className={styles.iconsContainer}>
                <div className={styles.icon}>
                    <img src="/bell_full.svg" alt="Notificações" />
                </div>

                <div className={styles.icon}>
                    <img src="/user_full.svg" alt="Perfil do usuário" />
                </div>
            </div>
        </div>
    );
}