import styles from './user.module.scss';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../services/api';
import { AiFillHome } from 'react-icons/ai';

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
            <div className={styles.path}>
                <div>
                    <AiFillHome color="#364156" size={25} />
                    /
                    <span>User Profile</span>
                </div>
            </div>

            <form>
                <div className={styles.header}>
                    <span>Editar Perfil</span>
                </div>

                <div className={styles.divInput}>
                    <span>Informações do usuário</span>

                    <div className={styles.inputs}>
                        <div>
                            <label>Usuário</label>
                            <input placeholder={user.name} />
                        </div>
                        
                        <div>
                            <label>Email</label>
                            <input placeholder={user.name} />
                        </div>
                        
                        <div>
                            <label>Primeiro Nome</label>
                            <input placeholder={user.name} />
                        </div>
                        
                        <div>
                            <label>Último Nome</label>
                            <input placeholder={user.name} />
                        </div>
                    </div>
                    
                </div>
            
                <div className={styles.divInput}>
                    <span>Informações de Endereço</span>

                    <div className={styles.inputs}>
                        <div>
                            <label>Endereço</label>
                            <input placeholder={user.name} />
                        </div>
                        
                        <div className={styles.secondChild}>    
                            <div>
                                <label>Cidade</label>
                                <input placeholder={user.name} />
                            </div>
                            
                            <div>
                                <label>País</label>
                                <input placeholder={user.name} />
                            </div>
                            
                            <div>
                                <label>CEP</label>
                                <input placeholder={user.name} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.divInput}>
                    <span>Informações de Endereço</span>

                    <div className={styles.inputs}>
                        <div>
                            <label>Sobre mim</label>
                            <textarea placeholder={user.name} />
                        </div>
                    </div>
                </div>
            
                <div className={styles.divButton}>
                    <button type="button">Editar</button>
                </div>
            </form>
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