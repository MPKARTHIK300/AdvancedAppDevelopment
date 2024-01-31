// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react';
// import LoginPage from './LoginPage';
// import './LoginPage.css'
// import RegistrationPage from './RegistrationPage';

// function App() {
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   const handleLogin = (username) => {
//     setLoggedInUser(username);
//     // Add additional logic for authentication (e.g., API calls, etc.)
//   };

//   return (
//     <div>
//       {loggedInUser ? (
//         <div>
//           <h1>Welcome, {loggedInUser}!</h1>
//           {/* Add your enquiry management components here */}
//         </div>
//       ) : (
//         <LoginPage onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import LoginPage from './LoginPage';
import './LoginPage.css'
import RegistrationPage from './RegistrationPage';
import './Register.css'
import HomePage from './HomePage';
import './HomePage.css'
import About from './About';
import './About.css'
import Contact from './Contact';
import './Contact.css'
import Payment from './Payment';
import './Payment.css'
import Sidebar from './Sidebar';
import AdminHomePage from './assets/Admin/AdminHomePage';
import AddEnquiry from './assets/Admin/AddEnquiry';
import AdminSidebar from './assets/Admin/AdminSidebar';



const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/reg" element={<RegistrationPage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/sidebar' element={<Sidebar/>}></Route>
        <Route path='/adminhome' element={<AdminHomePage/>}></Route>
        <Route path='/addenquiry' element={<AddEnquiry/>}></Route>
        <Route path='/adminsidebar' element={<AdminSidebar/>}></Route>
        
      </Routes>
    </BrowserRouter>
    </div>

  )
}

export default App

