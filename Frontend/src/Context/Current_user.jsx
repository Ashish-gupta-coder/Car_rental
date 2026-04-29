import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";
import { authContext } from "./auth_context";

export const userDataContext = createContext();

function Current_user({ children }) {
  const { serverUrl } = useContext(authContext);

  const [userData, setUserData] = useState(null);

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(
        serverUrl + "/api/user/currentuser",
        { withCredentials: true }
      );

      setUserData(result.data);
    } catch (error) {
      setUserData(null);
      console.error("Error fetching current user:", error);
    }
  };

  // ✅ correct place for useEffect
  useEffect(() => {
    getCurrentUser();
  }, [serverUrl]);

  const value = {
    userData,
    setUserData,
    getCurrentUser,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default Current_user;