import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { AuthProvider } from './contexts/AuthenticationContext'
import ProtectedRoute from './util/ProtectedRoute'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute exact path="/">
            <Dashboard />
          </ProtectedRoute>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
