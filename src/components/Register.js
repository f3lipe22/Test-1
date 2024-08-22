import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Estilo para el fondo oscuro que cubre toda la pantalla cuando el modal está activo
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Estilo para el contenedor del formulario
const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

// Estilo para el título y los inputs (se mantienen igual que antes)
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

const Register = ({ onSave, onClose, user, isAddingNewUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (user && !isAddingNewUser) {
      // Si estamos editando un usuario, cargar sus datos
      setName(user.name);
      setEmail(user.email);
      setPassword(user.password);
      setRole(user.role);
    } else {
      // Limpiar los campos si estamos agregando un nuevo usuario
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
    }
  }, [user, isAddingNewUser]);

  const handleRoleClick = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleRegister = () => {
    if (name && email && password && role) {
      const newUser = { id: user ? user.id : Date.now(), name, email, password, role };
      onSave(newUser);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <ModalOverlay> {/* Este contenedor se asegura de que el modal esté centrado y superpuesto */}
      <FormContainer>
        <Title>{isAddingNewUser ? 'Registrar Nuevo Usuario' : 'Editar Usuario'}</Title>
        <Input
          type="text"
          placeholder="Ingresa nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Ingresa correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <Input
          type="password"
          placeholder="Ingresa contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleRegister}>{isAddingNewUser ? 'Registrar' : 'Guardar Cambios'}</Button>
        {showMessage && <Message>{isAddingNewUser ? 'Registro exitoso.' : 'Cambios guardados correctamente.'}</Message>}
      </FormContainer>
    </ModalOverlay>
  );
};

export default Register;
