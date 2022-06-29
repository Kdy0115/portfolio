import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function BasicPagination() {
  return (
    <Box sx={{ "@media screen and (min-width:520px)" : {ml:'30%'},
               "@media screen and (max-width:520px)" : {pl:'30%'},
    }}>
      <Stack>
        <Pagination count={2} />
      </Stack>
    </Box>
  );
}
