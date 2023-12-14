import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CSS/UserList.css'

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
      <table className="users-table">
        <thread>
          <tr>
            <th className='col1'>User ID</th>
            <th className='col2'>Username</th>
            <th className='col3'>Email Address</th>
          </tr>
        </thread>
        <tbody>
          {users.map((user)=>(
            <tr key={user.userID}>
            <td className='col1'>{user.userID}</td>
            <td className='col2'>{user.username}</td>
            <td className='col3'>{user.userEmail}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList
// needed css side for the display of the table