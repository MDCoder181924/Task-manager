import React, { useContext, useState , useEffect } from 'react'
import Login from './components/Auth/login'
import EmployeDashboard from './components/Dashboard/EmployeDashbord'
import ManagerDashbord from './components/Dashboard/ManagerDashbord'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './context/localStorage'

const App = () => {
  const authData = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
  }, [])

  const handleLogin = (email, password) => {
  if (authData?.admin?.email === email && authData?.admin?.password === password) {
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin' }))
  } else if (authData) {
    const employee = authData.employees.find(emp => emp.email === email && emp.password === password)
    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee' }))
    }
  } else {
    alert('Invalid email or password')
  }
}

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'employee' && <EmployeDashboard Data={loggedInUserData} />}
      {user === 'admin' && <ManagerDashbord  />}
    </div>
  )
}

export default App
