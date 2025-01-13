import React, { ReactNode, useEffect, useState } from 'react';
import { loadUsers } from '../api';
import { User } from '../interfaces';
import { ErrorMsg, Header, Loading, SearchField, UsersList } from '../components';

export const Home: React.FC = () => {
  const [component, setComponent] = useState<ReactNode>(<Loading />);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await loadUsers(searchString);
        if ('data' in data) {
          const users: User[] = data.data;
          setComponent(<UsersList users={users} />);
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
  }, [searchString]);

  return (
    <React.Fragment>
      <Header title="Users List" />
      <div className="w-full flex flex-row justify-end">
        <SearchField onSearch={setSearchString} />
      </div>
      { component }
    </React.Fragment>
  );
};
