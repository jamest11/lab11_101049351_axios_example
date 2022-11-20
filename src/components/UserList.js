import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

const PersonList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://randomuser.me/api/?results=5');
      setUsers(res.data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      {users.map((user) => (
        <UserCard user={user} key={user.login.uuid} />
      ))}
    </>
  );
};

export default PersonList;