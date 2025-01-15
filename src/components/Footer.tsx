import React from 'react';

type FooterProps = {
  title: string
};

export const Footer: React.FC<FooterProps> = ({ title }) => (
  <div className="mt-4 py-4 text-base lg:text-xl">{ title }</div>
);
