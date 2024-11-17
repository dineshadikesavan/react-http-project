import { useEffect, useState } from "react";
import "./App.css";
import { Button, EditableText, InputGroup } from "@blueprintjs/core";

function App() {
  const [users, setUsers] = useState([]);

  const [newName, setNewName] = useState("");

  const [newEmail, setNewEmail] = useState("");

  const [newWebsite, setNewWebsite] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonData) => setUsers(jsonData));
  }, []);

  return (
    <>
      <div className="App">
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td><EditableText value={user.email}></EditableText></td>
                <td><EditableText value={user.website}></EditableText></td>
                <td>
                    <Button intent="primary">Update</Button> 
                    <Button intent="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td>
                <InputGroup value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter Name...">
                </InputGroup>
              </td>
              <td>
                <InputGroup value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Enter Email...">
                </InputGroup>
              </td>
              <td>
                <InputGroup value={newWebsite} onChange={(e) => setNewWebsite(e.target.value)} placeholder="Enter Website...">
                </InputGroup>
              </td>
              <td>
                <Button intent="success">Add User</Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default App;
