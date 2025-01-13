import React from 'react';
import { Box, Typography } from '@mui/material';

type UserParamBoxProps = {
  paramName: string
  paramValue: string
};

export const UserParamBox: React.FC<UserParamBoxProps> = ({ paramName, paramValue }) => (
  <Box display="grid" gridTemplateColumns="1fr 1fr" marginTop="4px">
    <Typography variant="caption">{paramName}</Typography>
    <Typography variant="body1" color="text.secondary">
      {paramValue}
    </Typography>
  </Box>
);
