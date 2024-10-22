import React from 'react';
import Icon from './icons';
import UserAvatar from './UserAvatar';
import './Card.css';

const Card = ({ ticket, user }) => {
  const getPriorityIcon = (priority) => {
    const priorityMap = {
      4: 'urgentPriorityColor',
      3: 'highPriority',
      2: 'mediumPriority',
      1: 'lowPriority',
      0: 'noPriority'
    };
    return <Icon name={priorityMap[priority]} className="priority-icon" />;
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && <UserAvatar user={user} />}
      </div>
      <div className="card-title">
        {getPriorityIcon(ticket.priority)}
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-tags">
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            <Icon name="noPriority" className="tag-icon" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;