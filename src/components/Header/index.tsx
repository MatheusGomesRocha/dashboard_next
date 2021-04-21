import styles from './styles.module.scss';

export function Header() {
    return(
        <div className={styles.headerContainer}>
            <h1>Dashboard</h1>

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