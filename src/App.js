import './App.css';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function List(props) {
  return (
    <ListGroup>
      <ListGroup.Item>{props.name}</ListGroup.Item>
      <ListGroup.Item>{props.username}</ListGroup.Item>
      <ListGroup.Item>{props.email}</ListGroup.Item>
      <ListGroup.Item>{props.phone}</ListGroup.Item>
      <ListGroup.Item>{props.website}</ListGroup.Item>
    </ListGroup>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users~')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <List name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website} />
      ))}
    </div>
  );
}

export default App;
