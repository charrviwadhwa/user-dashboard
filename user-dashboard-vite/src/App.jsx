import React, { useEffect, useState } from "react";
import UserProfile from "./components/Userprofile";
import UserActivities from "./components/Useractivities";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`)
      .then((res) => res.json())
      .then(setUser);

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
      .then((res) => res.json())
      .then(setActivities);
  }, [selectedUserId]);

  return (
    <div className="container">
      <h1>User Dashboard</h1>

      <label htmlFor="user-select">Select User:</label>
      <select
        id="user-select"
        onChange={(e) => setSelectedUserId(Number(e.target.value))}
        value={selectedUserId}
      >
        {users.map((u) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>

      <UserProfile user={user} />
      <UserActivities activities={activities} />
    </div>
  );
};

export default App;
