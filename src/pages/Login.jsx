import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'pass') {
      navigate('/gpt-engineer');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white items-center justify-center">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to GPTEngineer</h2>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            className="mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            className="mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full">Sign in</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
