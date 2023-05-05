import React from 'react';
import { Center, Box, Text } from '@chakra-ui/react';
const ContactMessage = () => {
  return (
    <React.Fragment>
      <Center>
        <Box width="80%" mt={['15%', '10%', '5%']}>
          <Center>
            <Text color="white" fontSize={20}>
              Please feel free to contact us via the following links!
            </Text>
          </Center>
        </Box>
      </Center>
    </React.Fragment>
  );
};

export default ContactMessage;
