import { useState } from 'react';
import styles from './styles.module.scss';

export function Sidebar() {
    const [sidebarLink, setSidebarLink] = useState('Dashboard');

    const array = ['Dashboard', 'User Profile', 'Table List', 'Typography', 'Icon', 'Maps', 'Notifications'];

    return(
        <div className={styles.sidebarContainer}>
            <div className={styles.backgroundTransparent} />
            
            <div className={styles.title}>
                <h2>Sidebar</h2>
            </div>

            <ul>
                {array.map((item, k) => (
                    <li style={{
                        background: sidebarLink === item && '#e6e8eb', 
                        color: sidebarLink === item && '#121212'
                    }} onClick={() => setSidebarLink(item)}>{item}</li>
                ))}
            </ul>
        </div>
    );
}