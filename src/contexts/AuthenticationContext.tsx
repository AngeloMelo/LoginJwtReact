import React, { createContext, useState } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
  signOut: () => void
  user: string
  jwt: string
}

type SignInData = {
  username: string
  password: string
}

export const AuthenticationContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState('')
  const [jwt, setJWT] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function signIn({ username }: SignInData) {
    // const { data } = await axiosClient.post('/api/login', signInData)

    // if (jwt) {
    //  axiosClient.defaults.headers.common.Authorization = `Bearer ${jwt}`
    // }

    setUser(username)
    setIsAuthenticated(true)
    setJWT({})
  }

  function signOut() {
    setUser(null)
    setIsAuthenticated(false)
    setJWT({})
  }

  return (
    <AuthenticationContext.Provider
      value={{ jwt, user, isAuthenticated, signIn, signOut }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
