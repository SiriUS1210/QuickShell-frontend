import React from "react";

const UserAvatar = ({ user }) => {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const getAvatarColor = () => {
    const colors = [
      "#FF6B6B", 
      "#4ECDC4",
      "#45B7D1", 
      "#96CEB4", 
      "#D4A5A5", 
      "#9B59B6", 
      "#3498DB", 
      "#E67E22",
      "#2ECC71", 
      "#F1C40F", 
      "#E74C3C", 
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="user-avatar">
      {user.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
      ) : null}
      <div
        className="avatar-fallback"
        style={{
          backgroundColor: getAvatarColor(),
          display: user.avatar ? "none" : "flex",
        }}
      >
        {getInitials(user.name)}
      </div>
      <span className={`status-dot ${user.available ? "available" : ""}`} />
    </div>
  );
};

export default UserAvatar;