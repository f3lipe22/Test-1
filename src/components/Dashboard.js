import React, { useState, useEffect } from 'react';
import Register from './Register';
import styled from 'styled-components';
import backgroundImage from '../assets/background.jpg'; // Importa tu imagen de fondo

// Estilo para el contenedor principal con el fondo
const DashboardContainer = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco translúcido para la tabla */
  border-radius: 10px;
`;

const TableHeader = styled.th`
  padding: 12px;
  background-color: #27ae60;
  color: white;
  font-family: 'Roboto', sans-serif;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  font-family: 'Roboto', sans-serif;
  text-align: left;
`;

const Button = styled.button`
  padding: 6px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  margin-right: 5px;

  &:hover {
    background-color: #2980b9;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddingNewUser, setIsAddingNewUser] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleAddNewUser = () => {
    setIsAddingNewUser(true);
    setSelectedUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setIsAddingNewUser(false);
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleSaveUser = (newUser) => {
    if (isAddingNewUser) {
      setUsers([...users, { ...newUser, id: Date.now() }]);
    } else {
      const updatedUsers = users.map((user) =>
        user.id === newUser.id ? newUser : user
      );
      setUsers(updatedUsers);
    }
    setShowModal(false);
    localStorage.setItem('users', JSON.stringify(users));
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <DashboardContainer>
      <h2>ArrozIA</h2>
      <Button onClick={handleAddNewUser}>Agregar Usuario</Button>
      <Table>
        <thead>
          <tr>
            <TableHeader>Nombre</TableHeader>
            <TableHeader>Correo</TableHeader>
            <TableHeader>Rol</TableHeader>
            <TableHeader>Contraseña</TableHeader>
            <TableHeader>Acciones</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>
                <Button onClick={() => handleEditUser(user)}>Editar</Button>
                <DeleteButton onClick={() => handleDeleteUser(user.id)}>Eliminar</DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {showModal && (
        <Register
          user={selectedUser}
          onSave={handleSaveUser}
          onClose={() => setShowModal(false)}
          isAddingNewUser={isAddingNewUser}
        />
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
