import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function BasicPagination() {
  return (
    <Box sx={{ ml:'45%', mt:'2%'}}>
      <Stack spacing={2}>
        <Pagination count={2} />
      </Stack>
    </Box>
  );
}
