import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos para el modal (los mismos que ya te pasé)
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const RoleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const RoleButton = styled.button`
  background-color: ${(props) => (props.selected ? '#27ae60' : 'transparent')};
  color: ${(props) => (props.selected ? 'white' : '#333')};
  border: 1px solid #27ae60;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #219150;
    color: white;
  }
`;

const EditButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const EditButton = styled.button`
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #219150;
  }
`;

const EditProfileModal = ({ user, onClose, onSave }) => {
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const handleSave = () => {
    const updatedUser = { ...user, name, role };
    onSave(updatedUser); // Llama a la función para guardar los cambios en el Dashboard
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ProfileImage src={user.profileImage} alt="Profile" />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <RoleContainer>
          <RoleButton selected={role === 'Trabajador'} onClick={() => setRole('Trabajador')}>
            Trabajador
          </RoleButton>
          <RoleButton selected={role === 'Administrador'} onClick={() => setRole('Administrador')}>
            Administrador
          </RoleButton>
          <RoleButton selected={role === 'Agronomo'} onClick={() => setRole('Agronomo')}>
            Agronomo
          </RoleButton>
        </RoleContainer>
        <EditButtonsContainer>
          <EditButton onClick={onClose}>Cancelar</EditButton>
          <EditButton onClick={() => console.log('Eliminar usuario')}>Eliminar</EditButton>
        </EditButtonsContainer>
        <SaveButton onClick={handleSave}>Guardar cambios</SaveButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EditProfileModal;
