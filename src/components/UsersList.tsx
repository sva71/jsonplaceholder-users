import React from 'react';
import { User } from '../interfaces';
import { UserCard } from './UserCard';

type UsersListProps = {
  users: User[]
};

export const UsersList: React.FC<UsersListProps> = ({ users }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    { users.map(user => (<UserCard key={user.id} user={user} />)) }
  </div>
);
