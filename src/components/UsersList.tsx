import React from 'react';
import { User } from '../interfaces';
import { UserCard } from './UserCard';
import { Box } from '@mui/material';

type UsersListProps = {
  users: User[]
};

export const UsersList: React.FC<UsersListProps> = ({ users }) => (
  <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gap="24px">
    { users.map(user => (<UserCard key={user.id} user={user} />)) }
  </Box>
);
