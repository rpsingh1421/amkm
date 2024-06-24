// // src/context/AuthContext.js

// "use client"
// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authenticatedUser, setAuthenticatedUser] = useState(null);
//   const [loading, setLoading] = useState(true); // Add a loading state

//   // useEffect(() => {
//   //   const fetchUser = async () => {
//   //     if (authenticatedUser!=null) {
//   //       try {
//   //         const response = await axios.get('/rest-api/auth/user'); // Example endpoint
//   //         console.log(response);
//   //         if (response.data.status) {
//   //           setAuthenticatedUser(response.data.body);
//   //         } else {
//   //           setAuthenticatedUser(null);
//   //           console.log("user failed")
//   //         }
//   //       } catch (error) {
//   //         setAuthenticatedUser(null);
//   //         console.error('User not authenticated');
//   //       } finally {
//   //         setLoading(false); // Set loading to false after the request completes
//   //       }
//   //     }
//   //   };
//   //   fetchUser();
//   // }, []);

//   return (
//     <AuthContext.Provider value={{ authenticatedUser, setAuthenticatedUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// export default AuthProvider;


"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const authenticatedUserInitialState = {
    member_id: '',
    member_name: '',
    member_email: '',
    contact: '',
    role: '',
    profile_image: ''
}
  const [authenticatedUser, setAuthenticatedUser] = useState(authenticatedUserInitialState);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get('/rest-api/auth/user');
  //       console.log("user authentication response:",response)
  //       if (response.data.status) {
  //         setAuthenticatedUser(response.data.body);
  //       } else {
  //         setAuthenticatedUser(authenticatedUserInitialState);
  //       }
  //     } catch (error) {
  //       setAuthenticatedUser(authenticatedUserInitialState);
  //       console.error('User not authenticated');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUser();
  // }, [router]);
  
  useEffect(() => {
    // Check localStorage for user data on initial load
    console.log("Check localStorage for user data on initial load")
    const storedUser = localStorage.getItem('amkm_user');
    if (storedUser) {
      console.log("user data is in localStorage...setting user data to context")
      setAuthenticatedUser(JSON.parse(storedUser));
    }
    console.log("no user data is in localStorage.")
  }, []);

  const login = (userData) => {
    console.log("after successful login....set user data to context and local storage")
    setAuthenticatedUser(userData);
    localStorage.setItem('amkm_user', JSON.stringify(userData));
  };

  const logout = () => {
    console.log("logout is processing...deleting user data in user context and local storage")
    setAuthenticatedUser(null);
    localStorage.removeItem('amkm_user');
    // You might want to call an API to invalidate the token on the server
  };
  return (
    <AuthContext.Provider value={{authenticatedUserInitialState, authenticatedUser, setAuthenticatedUser, loading ,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
