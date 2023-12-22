import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import styled from 'styled-components';
import Center from '@/components/Center';
import Footer from '@/components/Footer';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
  text-align: center;
`;

const LoginTitle = styled.h2`
  color: #333;
  font-size: 24px;
  text-decoration: underline;
  margin-bottom: 20px;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #fff;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0070f3;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

// Additional decorative styles
const DecorativeLine = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;

const DecorativeText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #0070f3;
`;

const LoginLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;
`;

const LoginCheckbox = styled.input`
  margin-right: 8px;
`;

// Apply styles in your components accordingly


export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push('/products'); // Redirect to the products page on successful login
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <Header />
      <Center>
        <LoginContainer>
          <LoginTitle>Login</LoginTitle>
          <LoginInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </LoginContainer>
      </Center>

    </>
  );
}
