import React from 'react';
import { Box, HStack, Center, VStack } from '@chakra-ui/react';
import SnsContactIcon from './snsContactIcon';
import { useBreakpointValue } from '@chakra-ui/react';

const SnsContacts = () => {
  const variant = useBreakpointValue({
    base: 'small',
    md: 'large',
  });
  return (
    <Box width="100%" mt={['30%', '20%', '10%', '5%']}>
      <Center>
        {variant === 'small' ? (
          <VStack spacing={12}>
            <HStack spacing={12}>
              <SnsContactIcon
                iconName="FaceBook"
                url="https://www.facebook.com/"
                delay={0.8}
              />
              <SnsContactIcon
                iconName="Twitter"
                url="https://www.twitter.com/"
                delay={1.0}
              />
              <SnsContactIcon
                iconName="GitHub"
                url="https://www.github.com/"
                delay={1.2}
              />
            </HStack>
            <HStack spacing={12}>
              <SnsContactIcon
                iconName="LinkedIn"
                url="https://www.linkedin.com/"
                delay={1.4}
              />
              <SnsContactIcon
                iconName=""
                url="mailto:k31m03.1020@gmail.com"
                delay={1.6}
              />
            </HStack>
          </VStack>
        ) : (
          <React.Fragment>
            <HStack spacing={12}>
              <SnsContactIcon
                iconName="FaceBook"
                url="https://www.facebook.com/"
                delay={0.8}
              />
              <SnsContactIcon
                iconName="Twitter"
                url="https://www.twitter.com/"
                delay={1.0}
              />
              <SnsContactIcon
                iconName="GitHub"
                url="https://www.github.com/"
                delay={1.2}
              />
              <SnsContactIcon
                iconName="LinkedIn"
                url="https://www.linkedin.com/"
                delay={1.4}
              />
              <SnsContactIcon
                iconName=""
                url="mailto:k31m03.1020@gmail.com"
                delay={1.6}
              />
            </HStack>
          </React.Fragment>
        )}
      </Center>
    </Box>
  );
};

export default SnsContacts;
