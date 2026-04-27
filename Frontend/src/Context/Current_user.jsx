import React, { createContext, useEffect, useState } from "react";

export const userDataContext = createContext();

function Current_user({ children }) {

  // ✅ Load from localStorage
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [loading, setLoading] = useState(false); // no API → no loading needed

  // ✅ Save to localStorage
  useEffect(() => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  }, [userData]);

  const value = {
    userData,
    setUserData,
    loading,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default Current_user;