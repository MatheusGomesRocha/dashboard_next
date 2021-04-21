import styles from './user.module.scss';
import { useRouter } from 'next/router';

export default function User() {
    const router = useRouter();

    return(
        <div className={styles.user}>
            <h1> olá {router.query.slug} </h1>
        </div>
    )
}