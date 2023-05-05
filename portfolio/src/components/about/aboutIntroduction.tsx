import React from 'react';
import {
  Text,
  Flex,
  Box,
  Image,
  Heading,
  Container,
  SlideFade,
  Center,
} from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

const AboutIntroduction = () => {
  const variant = useBreakpointValue({
    base: 'small',
    md: 'large',
  });
  const customTransitionName = {
    enter: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 1 },
    exit: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 1 },
  };

  return (
    <React.Fragment>
      {variant === 'small' ? (
        <Box height="100vh">
          <Flex height="100%">
            <Box mt={['15%', '10%', '5%']}>
              <Center>
                <Image
                  src="/test.png"
                  alt="Sample image"
                  objectFit="cover"
                  mt={['10%', '2%', '2%']}
                  w="80%"
                  h="100%"
                />
              </Center>
              <Box color="white" width="100%">
                <SlideFade in={true} transition={customTransitionName}>
                  <Container maxW="100%" color="white" pl="5%" mt="10%">
                    <Heading fontFamily="Raleway">Kodai Murakami</Heading>
                  </Container>
                  <Container maxW="100%" color="white" pl="10%" mt="10%">
                    <Heading fontFamily="Raleway" fontStyle="italic">
                      Enjoy the chaos with flexible creativity
                    </Heading>
                    <Text fontFamily="Raleway" fontStyle="italic">
                      柔軟性と創造性でカオスを楽しむ
                    </Text>
                  </Container>

                  <Container maxW="100%" color="white" pl="5%" mt="10%">
                    <Heading fontFamily="Raleway" size="md">
                      村上嵩大/Software Developer
                    </Heading>
                  </Container>
                </SlideFade>
              </Box>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box height="100vh">
          <Flex height="100vh">
            <Box color="white" mt={['28%', '24%', '16%', '12%']} width="60%">
              <SlideFade in={true} transition={customTransitionName}>
                <Container maxW="100%" color="white" pl="3%">
                  <Heading
                    size={['xl', '2xl', '3xl', '4xl']}
                    p={['10%', '7%', '3%', '0%']}
                    fontFamily="Raleway"
                  >
                    Kodai Murakami
                  </Heading>
                </Container>
                <Container
                  maxW="100%"
                  color="white"
                  pl="10%"
                  mt={['7%', '5%', '3%']}
                >
                  <Heading
                    size={['xl', 'xl', '2xl', '3xl']}
                    p={['10%', '7%', '3%', '0%']}
                    fontFamily="Raleway"
                    fontStyle="italic"
                  >
                    Enjoy the chaos with flexible creativity
                  </Heading>
                  <Text
                    pl="5%"
                    mt="-3%"
                    fontFamily="Raleway"
                    fontStyle="italic"
                  >
                    柔軟性と創造性でカオスを楽しむ
                  </Text>
                </Container>

                <Container maxW="100%" color="white" pl="7%" mt="7%">
                  <Heading
                    size={['md', 'lg', 'xl']}
                    p={['10%', '7%', '3%', '0%']}
                    fontFamily="Raleway"
                  >
                    村上嵩大/Software Developer
                  </Heading>
                </Container>
              </SlideFade>
            </Box>
            <Box h="100%" width="40%" mt="7%">
              <Image
                src="/test.png"
                alt="Sample image"
                objectFit="cover"
                w="80%"
                h="80%"
              />
            </Box>
          </Flex>
        </Box>
      )}
    </React.Fragment>
  );
};

export default AboutIntroduction;
