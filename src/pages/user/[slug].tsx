import styles from './user.module.scss';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';

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
                    <div>
                        <TextField label="Company (disabled)" disabled />
                        <TextField label="Nome de usuário" />
                        <TextField label="Email" />
                    </div>

                    <div>
                        <TextField label="Primeiro Name" />
                        <TextField label="Último Name" />
                    </div>

                    <div>
                        <TextField label="Endereço" />
                    </div>

                    <div>
                        <TextField label="Cidade" />
                        <TextField label="País" />
                        <TextField label="CEP" />
                    </div>

                </form>
            </div>
        </div>
    )
}