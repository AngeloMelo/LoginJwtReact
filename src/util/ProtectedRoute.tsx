import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { AuthenticationContext } from '../contexts/AuthenticationContext'

const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useContext(AuthenticationContext)
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute
