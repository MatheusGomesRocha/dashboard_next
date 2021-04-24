import React, { useState } from "react";

import { GetStaticProps } from "next";
import Image from 'next/image';
import { AiFillHome } from "react-icons/ai";
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

import { api } from "../services/api";
import { Path } from '../components/Path';
import styles from './dashboard.module.scss';

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
    {id: 1, title: 'Tráfego Total', amount: '157,872', icon: <AiFillHome size={32} />, moreThanLast: true, diff: '3,48%', lastRequest: 'Since last week'},
    {id: 2, title: 'Novos Usuários', amount: '3,148', icon: <AiFillHome size={32} />, moreThanLast: false, diff: '1,17%', lastRequest: 'Since yesterday'},
    {id: 3, title: 'Vendas', amount: '487', icon: <AiFillHome size={32} />, moreThanLast: false, diff: '8,14%', lastRequest: 'Since last friday'},
    {id: 4, title: 'Perfomace', amount: '71,15%', icon: <AiFillHome size={32} />, moreThanLast: true, diff: '7,98%', lastRequest: 'Since last month'},
  ];


  return (
    <div className={styles.dashboard}>
      <div className={styles.path}>
        <Path path="Dashboard" />
      
        <section className={styles.infoAmount}>
          {array.map(array => {
            return(
              <div key={array.id}>
                <div className={styles.topRow}>
                  <div>
                    <span>{array.title}</span>
                    <p>{array.amount}</p>
                  </div>
                  

                  <div className={styles.iconBall}>
                    {array.icon}
                  </div>
                </div>

                <div className={styles.bottomRow}>
                  <div>
                    {array.moreThanLast ? 
                      <BsArrowUp size={25} color="#04d361" />
                      : 
                      <BsArrowDown size={25} color="#C94A64" />
                    }
                    <span style={{color: array.moreThanLast ? '#04d361' : '#C94A64'}}>{array.diff}</span>
                  </div>

                  <span>{array.lastRequest}</span>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    
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

