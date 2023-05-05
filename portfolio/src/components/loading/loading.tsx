import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, increment, loadedSuccess } from '../../store/loadingSlice';
import { RootState, AppDispatch } from '../../store/store';
import { Progress, Flex, Text, keyframes } from '@chakra-ui/react';

const Loading = () => {
  const loadingState = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch<AppDispatch>();

  const name = 'Kodai Murakami';
  const fadeInUp = keyframes`
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `;

  useEffect(() => {
    dispatch(setLoading(true));
  }, []);

  useEffect(() => {
    if (loadingState.value < 100) {
      const interval = setInterval(() => {
        dispatch(increment());
      }, 15);
      return () => clearInterval(interval);
    } else {
      const timer = setTimeout(() => {
        dispatch(loadedSuccess());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loadingState.value]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      height="100vh"
      width="100%"
    >
      <Flex flex="1" />
      <Flex justifyContent="center" alignItems="flex-end">
        {name.split('').map((char, index) => (
          <Text
            as="span"
            animation={`${fadeInUp} 0.5s ease-out ${index * 0.1}s both`}
            key={index}
            color="white"
          >
            {char === '&nbsp;' ? '\u00A0' : char}
          </Text>
        ))}
      </Flex>
      <Progress
        width={{ base: '80%', md: '50%', lg: '15%' }}
        hasStripe
        colorScheme="gray"
        isAnimated={true}
        size="sm"
        value={loadingState.value}
      />
      <Flex flex="1" />
    </Flex>
  );
};

export default Loading;
