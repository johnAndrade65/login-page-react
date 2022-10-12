import "./global.css"

export default function App() {

  return <div className="container">
    <header className="header">
      <img className="logo" src="../public/logo.png" alt="WorkFlow" />
      <span>Your best news portal</span>
    </header>

    <form>
      <div className="inputContainer">
        <label htmlFor="email">E-mail</label>
        <input type="text" 
        name="email" 
        id="email" 
        placeholder="Type your e-mail"/>
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input type="password" 
        name="password" 
        id="password" 
        placeholder="Type your password"/>
      </div>

      <a href="">Forgot your password?</a>

      <button className="button">
        Login ➡
      </button>

      <div className="footer">
        <p>Not registered yet?</p>
        <a href="#">Register</a>
      </div>
    </form>
  </div>
}
