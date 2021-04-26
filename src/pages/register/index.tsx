import { MdEmail } from 'react-icons/md';
import { AiFillLock, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaUserAlt } from 'react-icons/fa';

import styles from '../login/styles.module.scss';

export default function login() {
    return(
        <div className={styles.login}>
            <section className={styles.divider}>
                <h1>Crie sua conta</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </section>

            <form>
                <div className={styles.header}>
                    <span>Cadastre-se com</span>
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
                    <span>Ou cadastre-se com as credenciais</span>

                    <div>
                        <FaUserAlt size={25} color="#afb2b1" />
                        <input placeholder="Name" />
                    </div>

                    <div>
                        <MdEmail size={25} color="#afb2b1" />
                        <input placeholder="Email" />
                    </div>
                    
                    <div>
                        <AiFillLock size={25} color="#afb2b1" />
                        <input placeholder="Senha" />
                    </div>
                </div>

                <div className={styles.checkbox} style={{gap: '1rem'}}>
                    <input type="checkbox" />
                    <span style={{width: '50%', fontSize: '0.875rem'}}>Eu CONCORDO com os termos de privacidade</span>
                </div>

                <div className={styles.button}>
                    <button type="button">Criar conta</button>
                </div>
            </form>
        </div>
    )
}