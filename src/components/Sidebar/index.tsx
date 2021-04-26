import { useContext, useState } from 'react';
import styles from './styles.module.scss';

import Link from 'next/link';

export function Sidebar() {
    const [sidebarLink, setSidebarLink] = useState('Dashboard');

    function setLinkAndPage(value) {
        setSidebarLink(value);
    }

    const array = [
       {id: 1, link: 'Dashboard', path: '/'}, 
       {id: 2, link: 'User Profile', path: `/user/Michael-Scott`}, 
       {id: 3, link: 'Maps', path: `/user`}, 
       {id: 4, link: 'Notifications', path: `/user`}, 
       {id: 5, link: 'Login', path: `/login`}, 
       {id: 6, link: 'Register', path: `/user`},     
    ];

    return(
        <div className={styles.sidebarContainer}>
            
            <div className={styles.title}>
                <h2>Sidebar</h2>
            </div>

            <ul>
               {array.map(array => {
                    return(
                    <Link key={array.id} href={array.path}>
                        <li style={{ background: sidebarLink === array.link && '#C94A64', color: sidebarLink === array.link && '#fff'}} 
                            onClick={() => setLinkAndPage(array.link)}>
                            {array.link}
                        </li>
                    </Link>
                    )
                })}
            </ul>
        </div>
    );
}