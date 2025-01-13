import React from 'react';
import { User } from '../interfaces';
import { Box, Card, CardActionArea, CardContent, Divider, Typography } from '@mui/material';
import { Link } from 'react-router';
import { UserParamBox } from './UserParamBox.tsx';

type UserCardProps = {
  user: User
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <Link to={`/user/${user.id}`}>
    <Box sx={{ minWidth: '23%' }}>
      <Card>
        <CardActionArea
          sx={{
            height: '100%',
            '&[data-active]': {
              backgroundColor: 'action.selected',
              '&:hover': {
                backgroundColor: 'action.selectedHover',
              },
            },
          }}
        >
          <CardContent sx={{ height: '100%' }}>
            <Typography variant="h5" component="div">
              {user.name}
            </Typography>
            <Divider />
            <UserParamBox paramName="ID:" paramValue={`${user.id}`} />
            <UserParamBox paramName="Username:" paramValue={user.username} />
            <UserParamBox paramName="E-mail:" paramValue={user.email} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  </Link>
);
