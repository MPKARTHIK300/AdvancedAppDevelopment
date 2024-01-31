// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "../src/LoginPage.css";

// const LoginPage = ({ onUserLogin, onAdminLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUserLogin = () => {
//     if (username.trim() !== '' && password.trim() !== '') {
//       onUserLogin(username);
//     } else {
//       alert('Please enter valid credentials.');
//     }
//   };

//   const handleAdminLogin = () => {
//     if (username.trim() !== '' && password.trim() !== '') {
//       onAdminLogin(username);
//     } else {
//       alert('Please enter valid credentials.');
//     }
//   };

//   return (
//     <div className="body">
//       <form>
//         <h2 className="h2">Login</h2>
//         <label>Email ID:</label>
//         <input
//           type="email"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <Link to='/home'>
//         <button type="button" onClick={handleUserLogin}>
//         User Login
//         </button>
//         </Link>
//         <br></br>
//         <Link to='/adminhome'>
//         <button type="button" onClick={handleAdminLogin}>
//           Admin Login
//         </button>
//         </Link>
//         <p>New User?</p>
//         <Link to="/reg">
//           <button type="button">Signup</button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../src/LoginPage.css";

const LoginPage = ({ onUserLogin, onAdminLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      onUserLogin(username);
    } else {
      alert('Please enter valid credentials.');
    }
  };

  const handleAdminLogin = () => {
    if (username === 'admin' && password === 'admin@123') {
      onAdminLogin(username);
    } else {
      alert('Invalid admin credentials.');
    }
  };

  return (
    <div className="body">
      <form>
        <h2 className="h2">Login</h2>
        <label>Email ID:</label>
        <input
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <Link to='/home'>
          <button type="button" onClick={handleUserLogin}>
            User Login
          </button>
        </Link>
        <br />
        <Link to='/adminhome'>
          <button type="button" onClick={handleAdminLogin}>
            Admin Login
          </button>
        </Link>
        <p>New User?</p>
        <Link to="/reg">
          <button type="button">Signup</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;


