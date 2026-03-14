import React, { useState, createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // ensure local storage is seeded before reading
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider