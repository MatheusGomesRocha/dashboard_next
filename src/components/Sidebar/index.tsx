import { useContext, useState } from 'react';
import styles from './styles.module.scss';

import Link from 'next/link';
import { HeaderContext } from '../../contexts/HeaderContext';

export function Sidebar() {
    const { togglePage } = useContext(HeaderContext);
    const [sidebarLink, setSidebarLink] = useState('Dashboard');

    function setLinkAndPage(value) {
        setSidebarLink(value);
        togglePage(value);
    }

    const array = [
       {id: 1, link: 'Dashboard', path: '/'}, 
       {id: 2, link: 'User Profile', path: `/user/Michael-Scott`}, 
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