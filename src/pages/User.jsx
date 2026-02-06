import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function User() {
  const { id, name } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );

      const data = await res.json();
      setData(data)
    };

    fetchData()

  }, [id]);

  return (
    <div>
      <p>User Page</p>
      <p>user id: {id}</p>
      <p>user name: {name}</p>
      <hr />
      {data.username} <br/> {data.email}
    </div>
  );
}
