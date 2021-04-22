import styles from './user.module.scss';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Image from 'next/image';

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
                        <TextField variant="outlined" label="Company (disabled)" disabled />
                        <TextField variant="outlined" label="Nome de usuário" />
                        <TextField variant="outlined" label="Email" />
                    </div>

                    <div>
                        <TextField variant="outlined" label="Primeiro Nome" />
                        <TextField variant="outlined" label="Último Nome" />
                    </div>

                    <div>
                        <TextField variant="outlined" label="Endereço" />
                    </div>

                    <div>
                        <TextField variant="outlined" label="Cidade" />
                        <TextField variant="outlined" label="País" />
                        <TextField variant="outlined" label="CEP" />
                    </div>

                    <div>
                        <TextField variant="outlined" label="Sobre mim" />
                    </div>

                    <div>
                        <button type="submit">Editar perfil</button>
                    </div>
                </form>
            </div>
        
            <div className={styles.profile}>
                <div>
                <Image
                    width={300}
                    height={300}
                    src="/avatar.jpeg"
                    objectFit="cover"
                />
                </div>
                
                <span>CEO - Founder</span>
                <h2>Jim Halpert</h2>

                <p>lorem ipsum aheio asmalmq oqdsak doqmdkq odoqdq oqmdkas omqom,s</p>

                <button type="button">Seguir</button>
            </div>
        </div>
    )
}