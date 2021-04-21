import { GetStaticProps } from "next";
import { api } from "../services/api";

type User = {
  id: BigInteger,
  name: string,
  salary: string,
  country: string,
  city: string
}

type UserProps = {
  users: User[]
}

export default function Home({users}: UserProps) {

  console.log(users);
  return (
    <div>
      {users.map(item => {
        return(
          <div>
            <h2>{item.name}</h2>

          </div>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await api.get('users');
  const data = response.data;

  console.log(data);

  const users = data.map(user => {
    return{
      id: user.id,
      name: user.name,
      salary: user.salary,
      country: user.country,
      city: user.city
    }
  })


  return {
    props: {
      users
    },

    revalidate: 60 * 60 * 8 // 8 HOURS
  }
  
}

