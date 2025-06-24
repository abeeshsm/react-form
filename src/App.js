import React, { useState } from 'react';
import ContactForm from './ContactForm';
import AdminPage from './AdminPage';

function App() {
  const [view, setView] = useState('form'); // 'form' or 'admin'

  return (
    <div>
      <h1>Simple Contact App (LocalStorage)</h1>
      <button onClick={() => setView('form')}>Contact Form</button>
      <button onClick={() => setView('admin')}>Admin Panel</button>

      <hr />

      {view === 'form' ? <ContactForm /> : <AdminPage />}
    </div>
  );
}

export default App;
