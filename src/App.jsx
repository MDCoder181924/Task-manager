import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/login'
import EmployeDashboard from './components/Dashboard/EmployeDashbord'
import ManagerDashbord from './components/Dashboard/ManagerDashbord'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './context/localStorage'


const App = () => {
  const { userData: authData } = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    if (loggedInUser) {
      setUser(loggedInUser.role)

      if (loggedInUser.role === 'employee' && authData?.employees) {
        const employee = authData.employees.find(
          (emp) => emp.email === loggedInUser.email
        )

        if (employee) {
          setLoggedInUserData(employee)
        } else {
          localStorage.removeItem('loggedInUser')
          setUser(null)
          setLoggedInUserData(null)
        }
      }
    }
  }, [authData])

  useEffect(() => {
    setLocalStorage()
  }, [])

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    if (loggedInUser?.role === 'employee' && authData?.employees) {
      const updatedEmployee = authData.employees.find(
        (emp) => emp.email === loggedInUser.email
      )

      setLoggedInUserData(updatedEmployee || null)
    }
  }, [authData])

  const handleLogin = (email, password) => {
    if (authData?.admin?.email === email && authData?.admin?.password === password) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.employees.find(
        (emp) => emp.email === email && emp.password === password
      )
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email }))
      } else {
        alert('Invalid email or password')
      }
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setLoggedInUserData(null)
  }

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'employee' && loggedInUserData && <EmployeDashboard Data={loggedInUserData} handleLogout={handleLogout} />}
      {user === 'admin' && <ManagerDashbord handleLogout={handleLogout} />}
    </div>
  )
}

export default App
