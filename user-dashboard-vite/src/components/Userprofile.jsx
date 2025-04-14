import React from "react";

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="card">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserProfile;
