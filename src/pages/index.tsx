import { GetStaticProps } from "next";
import { api } from "../services/api";
import { Path } from '../components/Path';
import Image from 'next/image';

import styles from './dashboard.module.scss';
import { AiFillHome } from "react-icons/ai";

type User = {
  id: string,
  avatar: string,
  name: string,
  salary: string,
  city: string,
  role: string
}

type UserProps = {
  users: User[];
}

export default function Home({users}: UserProps) {
  const array = [
    {id: 1, title: 'Tráfego Total', amount: '157,872', icon: <AiFillHome />, moreThanLast: true, diff: '3,48%', lastRequest: 'Since last week'},
    {id: 2, title: 'Novos Usuários', amount: '3,148', icon: <AiFillHome />, moreThanLast: false, diff: '1,17%', lastRequest: 'Since yesterday'},
    {id: 3, title: 'Vendas', amount: '487', icon: <AiFillHome />, moreThanLast: false, diff: '8,14%', lastRequest: 'Since last friday'},
    {id: 4, title: 'Perfomace', amount: '71,15%', icon: <AiFillHome />, moreThanLast: true, diff: '7,98%', lastRequest: 'Since last month'},
  ];

  console.log(users);
  return (
    <div className={styles.dashboard}>
      <Path path="Dashboard" />
      
      <section className={styles.infoAmount}>
        {array.map(array => {
          return(
            <div key={array.id}>
              <div className={styles.topRow}>
                <span>{array.title}</span>
                <p>{array.amount}</p>

                <div className={styles.iconBall}>
                  {array.icon}
                </div>
              </div>

              <div className={styles.bottomRow}>
                <div>
                  <AiFillHome size={15}/>
                  <span>{array.diff}</span>
                </div>

                <span>{array.lastRequest}</span>
              </div>
            </div>
          )
        })}
        
      </section>
    
      <section className={styles.graphics}>
        <div className={styles.salesGraphic}>

        </div>

        <div className={styles.ordersGraphic}>

        </div>
      </section>

      <section className={styles.tables}>
        <table cellSpacing={0}>
          <thead>
           <tr>
              <th></th>
              <th>Usuário</th>
              <th>Salário</th>
              <th>Cidade</th>
           </tr>
          </thead>

          <tbody>
            {users.map(user => {
              return(
                <tr key={user.id}>
                  <td>
                    <Image
                      src={user.avatar}
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                  </td>

                  <td>{user.name}</td>
                  <td>{user.salary}</td>
                  <td>{user.city}</td>
                </tr>
              )
            })}
          </tbody>
        </table>


        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Usuário</th>
              <th>Salário</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => {
              return(
                <tr key={user.id}>
                  <td>
                    <Image
                      src={user.avatar}
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.salary}</td>
                  <td>{user.role}</td>
                </tr> 
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('users');
  const data = response.data;

  console.log(data);

  const users = data.map(user => {
    return{
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      salary: user.salary,
      city: user.city,
      role: user.role,
    }
  })


  return {
    props: {
      users
    },

    revalidate: 60 * 60 * 8 // 8 HOURS
  }
  
}

