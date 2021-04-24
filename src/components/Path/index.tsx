import styles from './styles.module.scss';
import { AiFillHome } from 'react-icons/ai';

export function Path({path}) {
    return(
        <div className={styles.path}>
            <div>
                <AiFillHome color="#364156" size={25} />
                /
                <span>{path}</span>
            </div>
        </div>
    )
}