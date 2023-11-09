import React from 'react'
import type { NextPage } from "next";

const Login: NextPage=() => {
  return (
    <div>
      <h1>Welcome</h1>
      <div className="formField">
        <label>Mail Address : </label>
          <input
            type="email"
            placeholder="メールアドレス"
            name="email"
            required
          />
      </div>

      <div className="formField">
        <label>Password : </label>
          <input
            type="password"
            placeholder="パスワード"
            name="password"
            required
          />
      </div>
      <button className="loginButton">Login</button>
    </div>
  )
}

export default Login
