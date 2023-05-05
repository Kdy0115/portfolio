import React from 'react';
import { Box, Icon, SlideFade } from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';

interface SnsContactIconProps {
  iconName: string;
  url: string;
  delay: number;
}

const SnsContactIcon: React.FC<SnsContactIconProps> = ({
  iconName,
  url,
  delay,
}) => {
  const customTransition = {
    enter: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: delay },
    exit: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: delay },
  };
  var iconComponent;
  switch (iconName) {
    case 'FaceBook':
      iconComponent = FaFacebook;
      break;
    case 'Twitter':
      iconComponent = FaTwitter;
      break;
    case 'GitHub':
      iconComponent = FaGithub;
      break;
    case 'LinkedIn':
      iconComponent = FaLinkedin;
      break;
    case 'Instagram':
      iconComponent = FaInstagram;
      break;
    default:
      iconComponent = EmailIcon;
  }
  return (
    <SlideFade in={true} transition={customTransition}>
      <Box cursor="pointer">
        <Icon
          as={iconComponent}
          color="white"
          boxSize={['10', '10', '20']}
          cursor="pointer"
          className="icon"
          onClick={() => {
            window.location.href = url;
          }}
        />
      </Box>
    </SlideFade>
  );
};

export default SnsContactIcon;
