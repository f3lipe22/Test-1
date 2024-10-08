
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f9fb;
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 15px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  &:focus {
    border-color: #27ae60;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #219150;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledLink = styled.span`
  font-size: 14px;
  color: #34495e;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'example@gmail.com' && password === '1234') {
      alert('Inicio de sesión exitoso');
      navigate('/dashboard');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Logo src={logo} alt="App Logo" />
        <Title>Login</Title>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Iniciar Sesión</Button>
        <LinkContainer>
          <StyledLink onClick={() => navigate('/register')}>Registrarse</StyledLink>
          <StyledLink onClick={() => navigate('/reset-password')}>¿Olvidaste tu contraseña?</StyledLink>
        </LinkContainer>
      </FormContainer>
    </LoginContainer>
  );
};
// <StyledLink onClick={() => navigate('/register')}>Registrarse</StyledLink>
export default Login;
