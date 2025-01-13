import React from 'react';
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { Search } from '@mui/icons-material';

type SearchFieldProps = {
  onSearch: (searchString: string) => void
};

export const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  let inputTimeout: number | null | undefined = null;

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputTimeout) {
      clearTimeout(inputTimeout);
    }
    if (event.target.value.length > 2 || event.target.value.length === 0) {
      inputTimeout = setTimeout(() => onSearch(event.target.value), 500);
    }
  };

  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="input-with-icon-adornment">
        Search by name
      </InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={(
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        )}
        onChange={inputChange}
      />
    </FormControl>
  );
};
