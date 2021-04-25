import { useState } from 'react';

import styles from './styles.module.scss';
import Image from 'next/image';

import { AiOutlineSearch, AiFillBell } from 'react-icons/ai';
import { GoTriangleDown } from 'react-icons/go';

export function Header() {      
    const [hoverBell, setHoverBell] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    return(
        <>
            <div className={styles.headerContainer}>
                    <div className={styles.divInput}>
                        <AiOutlineSearch size={25} color="#afb2b1" />
                        <input placeholder="Search" />
                    </div>

                    <div className={styles.userInfo}>
                        <div className={styles.userNotification} onClick={() => setShowDropdown(!showDropdown)}>
                            <AiFillBell 
                                size={25} 
                                color={hoverBell ? "#afb2b1" : "#e6e8eb" }
                                className={styles.icon}
                            />
                            <div className={styles.badge}>5</div>

                            <div style={{display: showDropdown ? 'flex' : 'none'}} className={styles.dropdownMenu}>
                                <div className={styles.dropdownMenuItem}>
                                    <div className={styles.sendedNotificationImg}>
                                        <Image
                                            src="/avatar.jpeg"
                                            width={200}
                                            height={200}
                                            objectFit="cover"
                                        />
                                    </div>

                                    <div className={styles.sendedNotificationInfo}>
                                        <strong>Michael Scott</strong>
                                        <p>Mano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumilde</p>
                                    </div>

                                    <span>11:45</span>
                                </div>
                                <div className={styles.dropdownMenuItem}>
                                    <div className={styles.sendedNotificationImg}>
                                        <Image
                                            src="/avatar.jpeg"
                                            width={200}
                                            height={200}
                                            objectFit="cover"
                                        />
                                    </div>

                                    <div className={styles.sendedNotificationInfo}>
                                        <strong>Michael Scott</strong>
                                        <p>Mano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumilde</p>
                                    </div>

                                    <span>11:45</span>
                                </div>
                                <div className={styles.dropdownMenuItem}>
                                    <div className={styles.sendedNotificationImg}>
                                        <Image
                                            src="/avatar.jpeg"
                                            width={200}
                                            height={200}
                                            objectFit="cover"
                                        />
                                    </div>

                                    <div className={styles.sendedNotificationInfo}>
                                        <strong>Michael Scott</strong>
                                        <p>Mano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumilde</p>
                                    </div>

                                    <span>11:45</span>
                                </div>
                                <div className={styles.dropdownMenuItem}>
                                    <div className={styles.sendedNotificationImg}>
                                        <Image
                                            src="/avatar.jpeg"
                                            width={200}
                                            height={200}
                                            objectFit="cover"
                                        />
                                    </div>

                                    <div className={styles.sendedNotificationInfo}>
                                        <strong>Michael Scott</strong>
                                        <p>Mano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumildeMano, cadê tu velho? namoral, muito desumilde</p>
                                    </div>

                                    <span>11:45</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.userProfile}>
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

        </>
    );
}

