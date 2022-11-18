import axios from 'axios';
import { useEffect, useState } from 'react';
import PersonCard from './PersonCard';

const PersonList = () => {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://randomuser.me/api/?results=10');
      setPeople(res.data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      {people.map((person) => (
        <PersonCard person={person} key={person.login.uuid} />
      ))}
    </>
  );
};

export default PersonList;