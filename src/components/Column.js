import React from 'react';
import Card from './Card';
import Icon from './icons';
import './Column.css';

const Column = ({ title, tickets, users }) => {
  const getStatusIcon = (status) => {
    const statusMap = {
      'Backlog': 'backlog',
      'Todo': 'todo',
      'In progress': 'inProgress',
      'Done': 'done',
      'Canceled': 'cancelled',
      'Urgent': 'urgentPriorityColor',
      'High': 'highPriority',
      'Medium': 'mediumPriority',
      'Low': 'lowPriority',
      'No Priority': 'noPriority'
    };
    return statusMap[status] ? <Icon name={statusMap[status]} className="status-icon" /> : null;
  };

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title-wrapper">
          {getStatusIcon(title)}
          <span className="column-title">{title}</span>
        </div>
        <div className="column-actions">
          <span className="ticket-count">{tickets.length}</span>
          <Icon name="add" className="add-icon" />
          <Icon name="menu" className="menu-icon" />
        </div>
      </div>
      <div className="column-content">
        {tickets.map(ticket => (
          <Card 
            key={ticket.id}
            ticket={ticket}
            user={users.find(u => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};
export default Column;


