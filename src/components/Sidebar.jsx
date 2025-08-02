import React from 'react';
import profilePic from '../assets/profile.jpg';

const Sidebar = () => {
  const now = new Date();
  const timeIST = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata',
  });

  return (
    <div style={styles.sidebar}>
      <div style={styles.profileTop}>
        <img src={profilePic} alt="Profile" style={styles.profileImage} />
        <h3 style={styles.name}>Anurag Bachheti</h3>
      </div>

      <div style={styles.profileDetails}>
        <p style={styles.title}>Software Engineer 💻</p>
        <p style={styles.status}>
          <span style={styles.greenDot}></span> Online
        </p>
        <p style={styles.time}>{timeIST} IST local time</p>
        <p style={styles.location}>Gurugram, India</p>
        <p style={styles.email}>aviral19rana@gmail.com</p>
        <p style={styles.message}>Let me know your thoughts!</p>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#1e1e2f',
    padding: '20px',
    color: '#fff',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '20px',
  },
  profileTop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // 👈 Center image + name
    textAlign: 'center',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #fff',
  },
  name: {
    marginTop: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  profileDetails: {
    textAlign: 'left', // 👈 Left align all details
  },
  title: {
    fontSize: '16px',
    color: '#a0a0a0',
    marginTop: '0px',
  },
  status: {
    fontSize: '14px',
    color: '#00ff00',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '6px',
  },
  greenDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#00ff00',
    borderRadius: '50%',
    display: 'inline-block',
  },
  time: {
    fontSize: '13px',
    color: '#bbb',
    marginTop: '4px',
  },
  location: {
    fontSize: '14px',
    marginTop: '8px',
  },
  email: {
    fontSize: '13px',
    marginTop: '6px',
    wordBreak: 'break-word',
    color: '#ccc',
  },
  message: {
    marginTop: '10px',
    fontSize: '13px',
    color: '#aaa',
  },
};

export default Sidebar;