import React from 'react';

type FooterProps = {
  title: string
};

export const Footer: React.FC<FooterProps> = ({ title }) => (
  <div className="py-4 text-xl">{ title }</div>
);
