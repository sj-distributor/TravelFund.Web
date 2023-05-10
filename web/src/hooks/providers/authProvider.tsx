import React from "react"
import jwt_decode from "jwt-decode"
import { createContext } from "react"

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true
    setTimeout(callback, 100) // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  },
}

interface AuthContextType {
  token: string
  username: string
  signin: (user: string, callback?: VoidFunction) => void
  signout: (callback?: VoidFunction) => void
}

export const AuthContext = createContext<AuthContextType>(null!)

export default function AuthProvider(props: { children: React.ReactNode }) {
  let [token, setToken] = React.useState("")
  const [username, setUserName] = React.useState("")

  const signin = (token: string, callback?: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setToken(token)
      const decoded = jwt_decode<{ name: string }>(token)
      setUserName(decoded.name)
      callback && callback()
    })
  }

  const signout = (callback?: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      localStorage.removeItem("token")
      localStorage.removeItem("userName")
      setToken("")
      callback && callback()
    })
  }

  let value = { token, username, signin, signout }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}
