import React, { useContext } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'

const Dashboard: React.FC = () => {
  const { user, signOut } = useContext(AuthenticationContext)
  const onLogoutClick = ev => {
    ev.preventDefault()
    signOut()
  }
  return (
    <div>
      <div>Dashboard</div>
      <div>Bem-vindo {user}</div>
      <div>
        <button onClick={onLogoutClick}>Logout</button>
      </div>
    </div>
  )
}

export default Dashboard
