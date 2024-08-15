import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
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

const Title = styled.h1`
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
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

const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const RoleButton = styled.button`
  flex: 1;
  padding: 10px;
  margin: 0 5px;
  background-color: #ecf0f1;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #bdc3c7;
  }

  &.active {
    background-color: #27ae60;
    color: white;
    border: none;
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
  margin-top: 20px;

  &:hover {
    background-color: #219150;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Message = styled.p`
  color: #27ae60;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;
`;

const Register = () => {
  const [role, setRole] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleRoleClick = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleRegister = () => {
    // Simular el registro y mostrar un mensaje de verificación
    setShowMessage(true);
  };

  return (
    <RegisterContainer>
      <FormContainer>
        <Title>Registro de Nuevo Usuario</Title>
        <Input type="text" placeholder="Ingresa nombre completo" />
        <Input type="email" placeholder="Ingresa correo electrónico" />
        <RoleContainer>
          <RoleButton
            className={role === 'Trabajador' ? 'active' : ''}
            onClick={() => handleRoleClick('Trabajador')}
          >
            Trabajador
          </RoleButton>
          <RoleButton
            className={role === 'Administrador' ? 'active' : ''}
            onClick={() => handleRoleClick('Administrador')}
          >
            Administrador
          </RoleButton>
          <RoleButton
            className={role === 'Agrónomo' ? 'active' : ''}
            onClick={() => handleRoleClick('Agrónomo')}
          >
            Agrónomo
          </RoleButton>
        </RoleContainer>
        <Input type="password" placeholder="Ingresa contraseña" />
        <Input type="password" placeholder="Confirma contraseña" />
        <Button onClick={handleRegister}>Registrar</Button>
        {showMessage && <Message>Registro exitoso. Por favor, verifica tu correo electrónico.</Message>}
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
