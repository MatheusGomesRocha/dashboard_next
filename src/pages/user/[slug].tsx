import styles from './user.module.scss';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../services/api';

type User = {
    id: string;
    name: string;
    about: string,
    role: string,
    country: string,
    city: string,
    salary: string,
    avatar: string,
};

type UserProps = {
    user: User;
};

export default function User({ user }: UserProps) {
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
                    src={user.avatar}
                    objectFit="cover"
                />
                </div>
                
                <span>{user.role}</span>
                <h2>{user.name}</h2>

                <p>{user.about}</p>

                <button type="button">Seguir</button>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;

    const response = await api.get(`/users/${slug}`);

    const data = response.data;

    const user = {
        id: data.id,
        name: data.name,
        about: data.about,
        role: data.role,
        avatar: data.avatar,
        country: data.country,
        city: data.city,
        salary: data.salary
      }

    return {
        props: {
            user,
        },
        revalidate: 60 * 60 * 4, // 4 Hours
    }
}