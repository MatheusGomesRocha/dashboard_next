import styles from './user.module.scss';
import { useRouter } from 'next/router';

export default function User() {
    const router = useRouter();

    return(
        <div className={styles.user}>
            
            <div className={styles.divForm}>
                <div className={styles.header}>
                    <h2>Edit Profile</h2>
                    <span>Complete your profile</span>
                </div>

                <form>
                    
                </form>
            </div>
        </div>
    )
}