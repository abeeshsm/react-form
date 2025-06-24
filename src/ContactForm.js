import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem('contacts')) || [];
    saved.push(form);
    localStorage.setItem('contacts', JSON.stringify(saved));
    alert('Message saved!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required /><br />
      <button type="submit">Send</button>
    </form>
  );
}
