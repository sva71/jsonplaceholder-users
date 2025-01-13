import React from 'react';

type HeaderProps = {
  title: string
};

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <div className="py-7 text-2xl font-bold">{ title }</div>
);
