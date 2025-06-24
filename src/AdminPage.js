import React, { useEffect, useState } from 'react';

export default function AdminPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('contacts')) || [];
    setMessages(saved);
  }, []);

  const deleteMessage = (index) => {
    const updated = [...messages];
    updated.splice(index, 1);
    setMessages(updated);
    localStorage.setItem('contacts', JSON.stringify(updated));
  };

  const clearAll = () => {
    localStorage.removeItem('contacts');
    setMessages([]);
  };

  return (
    <div>
      <h2>Admin - Messages</h2>
      <button onClick={clearAll}>Clear All</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.name}</strong> ({msg.email}): {msg.message}
            <button onClick={() => deleteMessage(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
