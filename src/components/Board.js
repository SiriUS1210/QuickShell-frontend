import React, { useMemo } from 'react';
import Column from './Column';
import './Board.css';

const Board = ({ tickets, users, grouping, sorting }) => {
  const groupedAndSortedTickets = useMemo(() => {
    let grouped = {};
    
    // Group tickets
    if (grouping === 'status') {
      grouped = {
        'Backlog': [],
        'Todo': [],
        'In progress': [],
        'Done': [],
        'Canceled': []
      };
      tickets.forEach(ticket => {
        if (!grouped[ticket.status]) grouped[ticket.status] = [];
        grouped[ticket.status].push(ticket);
      });
    } else if (grouping === 'user') {
      users.forEach(user => {
        grouped[user.name] = [];
      });
      tickets.forEach(ticket => {
        const user = users.find(u => u.id === ticket.userId);
        if (user) grouped[user.name].push(ticket);
      });
    } else if (grouping === 'priority') {
      grouped = {
        'No Priority': [],
        'Low': [],
        'Medium': [],
        'High': [],
        'Urgent': []
      };
      tickets.forEach(ticket => {
        const priorityMap = {
          0: 'No Priority',
          1: 'Low',
          2: 'Medium',
          3: 'High',
          4: 'Urgent'
        };
        const priorityName = priorityMap[ticket.priority];
        if (!grouped[priorityName]) grouped[priorityName] = [];
        grouped[priorityName].push(ticket);
      });
    }

    // Sort tickets within each group
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return grouped;
  }, [tickets, users, grouping, sorting]);

  return (
    <div className="board">
      {Object.entries(groupedAndSortedTickets).map(([title, tickets]) => (
        <Column 
          key={title}
          title={title}
          tickets={tickets}
          users={users}
        />
      ))}
    </div>
  );
};

export default Board;
