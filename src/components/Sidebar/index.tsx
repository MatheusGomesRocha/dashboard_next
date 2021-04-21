import { useState } from 'react';
import styles from './styles.module.scss';

import Link from 'next/link';

export function Sidebar() {
    const [sidebarLink, setSidebarLink] = useState('Dashboard');



    const array = [
       {id: 1, link: 'Dashboard', path: '/'}, 
       {id: 2, link: 'User Profile', path: `/user/teste`}, 
       {id: 3, link: 'Table List', path: `/user`}, 
       {id: 4, link: 'Typography', path: `/user`}, 
       {id: 5, link: 'Icons', path: `/user`}, 
       {id: 6, link: 'Maps', path: `/user`}, 
       {id: 7, link: 'Notifications', path: `/user`}, 
      
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
                        <li style={{ background: sidebarLink === array.link && '#04d361', }} 
                            onClick={() => setSidebarLink(array.link)}>
                            {array.link}
                        </li>
                    </Link>
                    )
                })}
            </ul>
        </div>
    );
}