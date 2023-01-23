// Write your code here

const Login = props => {
  const {login} = props

  return (
    <button type="button" className="login-button" onClick={login}>
      Login
    </button>
  )
}

export default Login
