import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState(""); // Change 'email' to 'username'
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Change 'email' to 'username'
      });

      const data = await response.json();

      // Handle the response data (e.g., show a success message or redirect)
      console.log(data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
