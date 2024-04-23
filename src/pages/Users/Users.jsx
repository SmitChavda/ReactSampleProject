import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import userService from "src/services/userService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    userService
      .getUsers()
      .then((res) => {
        // handle response here
        setUsers(res.data);
      })
      .catch((err) => {
        // handle errors here
        console.log(err);
      })
      .finally(() => {
        // handle extra logic here such as show/hide loader
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
      <Button variant="dark" href="/">
        Home
      </Button>
    </>
  );
};

export default Users;
