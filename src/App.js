
import { useState } from 'react';
import './App.css';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(username, password);
    if(username === 'user' && password === 'password') {
      setMessage(`Welcome, ${username}!`);
    }
    else
    {
      setMessage('Invalid username or password');
    }
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      { message && <p>{message}</p> }
      
      { message === 'Invalid username or password' || message === '' ? (
        <form onSubmit={ handleSubmitForm}>
        <div>
          <label>Username: </label>
          <input 
            type='text' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      ) : null }
      
    </div>
  );
}

export default App;
