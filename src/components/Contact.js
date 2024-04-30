import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data formulir ke server atau lakukan penanganan lainnya
    console.log(formData);
    // Simpan pesan ke dalam state
    setMessages([...messages, formData]);
    // Reset formulir setelah dikirim
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container contact">
      <h2 className="main-title text-center">CONTACT</h2>
      <form onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-1">
              <input
                name="name"
                placeholder="Name"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-1">
              <input
                name="email"
                placeholder="Email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-1">
              <input
                name="subject"
                placeholder="Subject"
                className="contact-input"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <textarea
            name="message"
            placeholder="Message"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <input className="form-btn" type="submit" value="Send Message" />
          </div>
        </div>
      </form>
      {/* Tampilkan pesan-pesan */}
      <div className="messages">
      <h2 className="main-title text-center">MESSAGE</h2>
        {messages.map((message, index) => (
          <div key={index} className="message-box">
            <p className="user-name"><strong>{message.name}</strong></p>
            <p className="user-message">{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
