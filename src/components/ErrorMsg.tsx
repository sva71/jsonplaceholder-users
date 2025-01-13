import React from 'react';

type ErrorProps = {
  message: string
};

export const ErrorMsg: React.FC<ErrorProps> = ({ message }) => (
  <p className="text-red-500">
    Application error:
    {' '}
    { message }
  </p>
);
