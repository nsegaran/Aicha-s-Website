import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the server
    const formData = { email, name, message };
    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle response from server
      });
  };

  return (
    <form onSubmit={handleSubmit}>
        <Box style={styles.box}>
        <input
        type="email"
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        style={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
        </Box>
      <textarea
      style={styles.input_message}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <Box style={styles.box_2}>
      <button style={styles.button} type="submit">Send</button>
      </Box>
    </form>
  );
};

const styles = {
    input: {
      fontFamily: "Gill Sans",
      fontSize: 18,
      color: "#EF72B0",
      padding: 20,
      backgroundColor: "rgba(230, 133, 181, 0.32)",
      border: "none",
      width: "35%",

    },
    input_message: {
        fontFamily: "Gill Sans",
        fontSize: 18,
        color: "#EF72B0",
        backgroundColor: "rgba(230, 133, 181, 0.32)",
        border: "none",
        marginTop: 40,
        width: "100%",
        height: 200,
        padding: 20,
    },
    box: {
        display: "flex",
        justifyContent: "space-between",
        width: "110%",
    },
    box_2: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        margin: 40,
    },
    button: {
        width: "25%",
        padding: 10,
        fontFamily: "Gill Sans",
      fontSize: 20,
      backgroundColor: "#EF72B0",
      border: "none",
      marginBottom: 30,
    },
    
  };

export default ContactForm;
