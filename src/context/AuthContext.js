// // src/context/AuthContext.js
// "use client"
// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authenticatedUser, setAuthenticatedUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get('/rest-api/auth/user'); // Example endpoint
//         console.log(response);
//         if (response.data.status) {
//           setAuthenticatedUser(response.data.body);
//         } else {
//           setAuthenticatedUser(null);
//         }
//       } catch (error) {
//         setAuthenticatedUser(null);
//         console.error('User not authenticated');
//       }
//     };
//     fetchUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   console.log('useAuth called, context:', context);
// //   if (context === undefined) {
// //     throw new Error('useAuth must be used within an AuthProvider');
// //   }
// //   return context;
// // };

// export default AuthProvider;
// // export {AuthContext}

// src/context/AuthContext.js

"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/rest-api/auth/user'); // Example endpoint
        console.log(response);
        if (response.data.status) {
          setAuthenticatedUser(response.data.body);
        } else {
          setAuthenticatedUser(null);
          console.log("user failed")
        }
      } catch (error) {
        setAuthenticatedUser(null);
        console.error('User not authenticated');
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authenticatedUser, setAuthenticatedUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
