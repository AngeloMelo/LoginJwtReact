import React, { useContext } from 'react'

import { useForm } from 'react-hook-form'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const { signIn } = useContext(AuthenticationContext)

  const history = useHistory()

  const handleLogin = async formData => {
    await signIn(formData)
    history.replace({ pathname: '/' })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input name="username" type="text" {...register('username')} />
        <br />
        <input name="password" type="password" {...register('password')} />
        <br />
        <input type="submit" value="Entrar" />
      </form>
    </div>
  )
}

export default Login
