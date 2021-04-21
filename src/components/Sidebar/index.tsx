import { useState } from 'react';
import styles from './styles.module.scss';

export function Sidebar() {
    const [sidebarLink, setSidebarLink] = useState('Dashboard');

    const array = ['Dashboard', 'User Profile', 'Table List', 'Typography', 'Icon', 'Maps', 'Notifications'];

    return(
        <div className={styles.sidebarContainer}>
            
            <div className={styles.title}>
                <h2>Sidebar</h2>
            </div>

            <ul>
                {array.map((item, k) => (
                    <li style={{
                        background: sidebarLink === item && '#04d361', 
                    }} onClick={() => setSidebarLink(item)}>{item}</li>
                ))}
            </ul>
        </div>
    );
}