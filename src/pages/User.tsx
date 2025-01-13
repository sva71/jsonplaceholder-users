import React, { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadSelectedUser } from '../api';
import { User } from '../interfaces';
import { ErrorMsg, Header, Loading, UserDetails } from '../components';

export const UserPage: React.FC = () => {
  const { id } = useParams();
  const [component, setComponent] = useState<ReactNode>(<Loading />);

  useEffect(() => {
    if (!id) {
      setComponent(<ErrorMsg message="No user id for this page" />);
      return;
    }
    (async () => {
      try {
        const data = await loadSelectedUser(id);
        if ('data' in data) {
          const users: User[] = data.data;
          if (users.length !== 1) {
            setComponent(<ErrorMsg message="Error loading user" />);
            return;
          }
          const user = users[0];
          setComponent(<UserDetails user={user} />);
        }
        else {
          setComponent(<ErrorMsg message="No users found" />);
        }
      }
      catch (e) {
        const message = (e !== null && typeof e === 'object' && 'message' in e) ? e.message as string : 'Unknown error';
        setComponent(<ErrorMsg message={message} />);
      }
    })();
  }, []);

  return (
    <React.Fragment>
      <Header title={`User Card #${id}`} />
      { component }
    </React.Fragment>
  );
};
