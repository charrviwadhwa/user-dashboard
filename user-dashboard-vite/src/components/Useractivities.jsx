import React from "react";

const UserActivities = ({ activities }) => {
  if (!activities) return null;

  return (
    <div className="card">
      <h2>User Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.title}</strong>
            <p>{activity.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
