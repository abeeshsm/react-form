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
    alert('✅ Message saved!');
    setForm({ name: '', email: '', message: '' });
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <h2 style={headingStyle}>Contact Form</h2>
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        style={inputStyle}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        style={inputStyle}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows={4}
        style={{ ...inputStyle, resize: 'none' }}
        required
      />
      <button type="submit" style={buttonStyle}>Send Message</button>
    </form>
  );
}
