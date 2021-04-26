import { MdEmail } from 'react-icons/md';
import { AiFillLock, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import styles from './styles.module.scss';

export default function login() {
    return(
        <div className={styles.login}>
            <section className={styles.divider}>
                <h1>Bem vindo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </section>

            <form>
                <div className={styles.header}>
                    <span>Faça login com</span>
                    <div>
                        <button type="button">
                            <AiFillGithub size={20} />
                            <span>Github</span>
                        </button>
                        <button type="button">
                            <FcGoogle size={20} />
                            <span>Github</span>
                        </button>
                    </div>
                </div>

                <div className={styles.divInput}>
                    Ou faça login com as credenciais

                    <div>
                        <MdEmail size={25} color="#f7f8fa" />
                        <input placeholder="Email" />
                    </div>
                    
                    <div>
                        <AiFillLock size={25} color="#f7f8fa" />
                        <input placeholder="Senha" />
                    </div>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" />
                    <span>Manter conectado</span>
                </div>

                <div className={styles.button}>
                    <button type="button">Login</button>
                </div>
            </form>

            <div>
                <a href="">Esqueceu a senha?</a>
                <a href="">Criar uma conta</a>
            </div>
        </div>
    )
}