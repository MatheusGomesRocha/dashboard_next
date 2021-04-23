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