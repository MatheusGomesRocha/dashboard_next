import { useContext, useState } from 'react';

import { AiOutlineSearch, AiFillBell } from 'react-icons/ai';
import { GoTriangleDown } from 'react-icons/go';
import { FiLogOut } from 'react-icons/fi';
import { FaUserAlt, FaCog } from 'react-icons/fa';
import Image from 'next/image';

import styles from './styles.module.scss';
import { NotificationContext } from '../../contexts/NotificationContext';

export function Header() {      
    const [hoverBell, setHoverBell] = useState(false);
    const [showDropdownNotification, setShowDropdownNotification] = useState(false);
    const [showDropdownProfile, setShowDropdownProfile] = useState(false);

    function handleDropdown (dropdownNotification: string) {
        if(dropdownNotification == 'notification') {
            setShowDropdownNotification(!showDropdownNotification);
            setShowDropdownProfile(false);
        } else {
            setShowDropdownNotification(false);
            setShowDropdownProfile(!showDropdownProfile);
        }
    }

    const { notificationList } = useContext(NotificationContext);
    return(
        <>
            <div className={styles.headerContainer}>
                    <div className={styles.divInput}>
                        <AiOutlineSearch size={25} color="#afb2b1" />
                        <input placeholder="Search" />
                    </div>

                    <div className={styles.userInfo}>
                        <div className={styles.userNotification} onClick={() => handleDropdown('notification')}>
                            <AiFillBell 
                                size={25} 
                                color={hoverBell ? "#afb2b1" : "#e6e8eb" }
                                className={styles.icon}
                            />
                            <div className={styles.badge}>{notificationList.length}</div>

                            <div style={{display: showDropdownNotification ? 'flex' : 'none'}} className={styles.dropdownMenu}>
                                {notificationList.map(notification => {
                                    return(
                                        <div key={notification.id} className={styles.dropdownMenuItem}>
                                            <div className={styles.sendedNotificationImg}>
                                                <Image
                                                    src="/avatar.jpeg"
                                                    width={200}
                                                    height={200}
                                                    objectFit="cover"
                                                />
                                            </div>

                                            <div className={styles.sendedNotificationInfo}>
                                                <strong>{notification.by}</strong>
                                                <p>{notification.content}</p>
                                            </div>

                                            <span>{notification.time}</span>
                                         </div>
                                    )
                                })}
                                
                                <div className={styles.viewAll}>
                                    <span>Ver todas</span>
                                </div>
                            </div>
                        </div>


                        <div className={styles.userProfile} onClick={() => handleDropdown('profile')}>
                            <Image 
                                src="/avatar.jpeg" 
                                alt="Perfil do usuário" 
                                width="100"
                                height="100"
                            />

                            <GoTriangleDown size={15} color="#e6e8eb" />

                            <div style={{display: showDropdownProfile ? 'flex' : 'none'}} className={styles.dropdownMenu}>
                                <strong>Bem vindo</strong>

                                <div className={styles.dropdownMenuItem}>
                                    <FaUserAlt size={20} color="#808080" />
                                    <span>Meu Perfil</span>
                                </div>

                                <div className={styles.dropdownMenuItem}>
                                    <FaCog size={20} color="#808080" />
                                    <span>Configurações</span>
                                </div>
                                
                                <div className={styles.dropdownMenuItem}>
                                    <FiLogOut size={20} color="#C94A64" />
                                    <span>Sair</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </>
    );
}

