import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const fetchAllUsers = async ()=>{
      try{
        const res = await axios.get("http://localhost:3000/user")
        setUsers(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllUsers();
  },[])

  return (
    <div>
      <h1>User List</h1>
      <div className="users">
        {users.map((user) => (
          <div className="users" key={user.userID}>
            <p>UserID: {user.userID}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.userEmail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList