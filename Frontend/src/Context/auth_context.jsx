import React from 'react'
import { createContext } from 'react'
export const authContext = createContext()
function Auth_context({ children }) {
    let serverUrl = "http://localhost:5000"
    let value = {
        serverUrl
    }
  return (
    <div>
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    </div>
  )
}

export default Auth_context