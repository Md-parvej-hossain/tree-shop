import React from 'react';
import UsersTable from '../../../components/Tables/UsersTable';

const Users = () => {
  const users = [
    {
      _id: '1',
      name: 'Admin User',
      email: 'admin@gmail.com',
      role: 'admin',
      status: 'active',
      joinedDate: '2024-10-01',
      photo: '',
    },
    {
      _id: '2',
      name: 'Normal User',
      email: 'user@gmail.com',
      role: 'user',
      status: 'blocked',
      joinedDate: '2024-11-15',
      photo: '',
    },
  ];
  const handleBlock = id => {
    console.log('Block/Unblock user:', id);
  };

  const handleDelete = id => {
    if (confirm('Are you sure?')) {
      console.log('Delete user:', id);
    }
  };

  return (
    <div>
      <UsersTable users={users} onBlock={handleBlock} onDelete={handleDelete} />
    </div>
  );
};

export default Users;
