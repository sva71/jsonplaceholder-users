import React from 'react';
import { User } from '../interfaces';
import { Button, Card, CardActions, CardContent, Divider } from '@mui/material';
import { UserParamBox } from './UserParamBox.tsx';
import { Link } from 'react-router';

type UserDetailsProps = {
  user: User
};

export const UserDetails: React.FC<UserDetailsProps> = ({ user }) => (
  <Card>
    <CardContent>
      <UserParamBox paramName="Name:" paramValue={user.name} />
      <Divider />
      <UserParamBox paramName="ID:" paramValue={`${user.id}`} />
      <UserParamBox paramName="Username:" paramValue={user.username} />
      <UserParamBox paramName="E-mail:" paramValue={user.email} />
      <UserParamBox paramName="Phone:" paramValue={user.phone} />
      <UserParamBox paramName="Company:" paramValue={user.company.name} />
      <UserParamBox paramName="Catch Phrase:" paramValue={user.company.catchPhrase} />
      <UserParamBox paramName="Address:" paramValue={`${user.address.suite}, ${user.address.street}, ${user.address.city}`} />
      <UserParamBox paramName="ZIP code:" paramValue={user.address.zipcode} />
    </CardContent>
    <Divider />
    <CardActions>
      <Link to="/">
        <Button>Back to list</Button>
      </Link>
    </CardActions>
  </Card>
);
