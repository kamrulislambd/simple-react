import { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);
  
  return(
    <div>
      <h1>External Users : {users.length}</h1>
      {
        users.map(user => <User name={user.name} email={user.email} website={user.website} username={user.username} phone={user.phone} address={user.address.city} location={user.address.geo.lat} company={user.company.name}></User>)
      }
    </div>
  );
}

function User(props){

  return (
    <div className='container'>
      <h2>Name : {props.name}</h2>
      <p>Email : {props.email}</p>
      <p>Website : {props.website}</p>
      <p>User Id : {props.username}</p>
      <p>Phone : {props.phone}</p>
      <p>City : {props.address}</p>
      <p>Location : {props.location} Lat</p>
      <p>Company : {props.company}</p>
    </div>
  );
}


export default App;
