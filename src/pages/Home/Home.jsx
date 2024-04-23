import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import homeService from "src/services/homeService";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    homeService
      .getPosts()
      .then((res) => {
        // handle response here
        setPosts(res.data);
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
    getPosts();
  }, []);
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((item, index) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
      <Button variant="dark" href="/users">
        Users
      </Button>
    </>
  );
};

export default Home;
