import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';

import { api } from '../../services/api';
import { Path } from '../../components/Path';

import styles from './user.module.scss';

type User = {
    id: string;
    name: string;
    about: string,
    role: string,
    country: string,
    city: string,
    avatar: string,
    friends: number,
    photos: number,
    comments: number,
    age: number,
};

type UserProps = {
    user: User;
};

export default function User({ user }: UserProps) {
    return(
        <div className={styles.user}>
            <Path path="User Profile" />

            <div className={styles.userInfo}>
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

                <section className={styles.profile}>
                    <div className={styles.topBackground} />

                    <section className={styles.img}>
                        <Image
                            src={user.avatar}
                            width={500}
                            height={500}
                            objectFit="cover"
                        />
                    </section>
                    
                    <section className={styles.userHistory}>
                        <div>
                            <span>{user.friends}</span>
                            <span>Amigos</span>
                        </div>
                        <div>
                            <span>{user.photos}</span>
                            <span>Fotos</span>
                        </div>
                        <div>
                            <span>{user.comments}</span>
                            <span>Comentários</span>
                        </div>
                    </section>

                    <section className={styles.userPersonal}>
                        <span>{user.name}, <span style={{color: '#afb2b1'}}>{user.age}</span></span>

                        <span>{user.city}, {user.country}</span>

                        <span>{user.role}</span>

                        <p>{user.about}</p>
                    </section>
                </section>
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
        age: data.age,
        photos: data.photos,
        friends: data.friends,
        comments: data.comments
      }

    return {
        props: {
            user,
        },
        revalidate: 60 * 60 * 4, // 4 Hours
    }
}