import styles from './styles.module.scss';

export function Sidebar() {
    return(
        <div className={styles.sidebarContainer}>
            <div className={styles.backgroundTransparent} />
            
            <div className={styles.title}>
                <h2>Sidebar</h2>
            </div>

            <ul>
                <li>Dashboard</li>
                <li>User Profile</li>
                <li>Table List</li>
                <li>Typography</li>
                <li>Icons</li>
                <li>Maps</li>
                <li>Notifications</li>
            </ul>
        </div>
    );
}