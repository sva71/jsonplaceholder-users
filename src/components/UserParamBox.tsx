import React from 'react';

type UserParamBoxProps = {
  paramName: string
  paramValue: string
};

export const UserParamBox: React.FC<UserParamBoxProps> = ({ paramName, paramValue }) => (
  <div className="mt-1 grid grid-cols-2">
    <p className="text-black font-medium">{paramName}</p>
    <p className="text-gray-600 whitespace-nowrap overflow-hidden overflow-ellipsis">{paramValue}</p>
  </div>
);
