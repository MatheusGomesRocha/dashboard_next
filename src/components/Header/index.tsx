import { useContext, useState } from 'react';

import styles from './styles.module.scss';
import Image from 'next/image';

import { AiFillHome, AiOutlineSearch, AiFillBell } from 'react-icons/ai';
import { GoTriangleDown } from 'react-icons/go';

export function Header() {    
    const [hoverBell, setHoverBell] = useState(false);

    return(
        <>
            <div className={styles.headerContainer}>
                    <div className={styles.divInput}>
                        <AiOutlineSearch size={25} color="#afb2b1" />
                        <input placeholder="Search" />
                    </div>

                    <div className={styles.userInfo}>
                        <div>
                            <AiFillBell 
                                size={25} 
                                color={hoverBell ? "#afb2b1" : "#e6e8eb" }
                                className={styles.icon}
                            />
                            <div className={styles.badge}>5</div>
                        </div>

                        <div>
                            <Image 
                                src="/avatar.jpeg" 
                                alt="Perfil do usuário" 
                                width="100"
                                height="100"
                            />

                            <GoTriangleDown size={15} color="#e6e8eb" />
                        </div>
                    </div>
            </div>

            {/* <div className={styles.path}>
                <div>
                    <AiFillHome onClick={() => togglePage('Dashboard')} size={25} color="#C94A64" />
                    /
                    <span>{page}</span>
                </div>
            </div> */}

        </>
    );
}