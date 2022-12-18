import React from 'react';
import {Box, VStack} from 'native-base';
import {Body} from './typography/Body';

interface ILinkProps {
  title: string;
  icon: JSX.Element;
}

const Link = (props: ILinkProps) => {
  const {icon, title} = props;

  return (
    <VStack alignItems={'center'} space={3}>
      <Box
        w={16}
        h={16}
        bgColor={'primary.200'}
        rounded={'full'}
        justifyContent={'center'}
        alignItems={'center'}>
        {icon}
      </Box>
      <Body type="bodyMediumBold">{title}</Body>
    </VStack>
  );
};

export default Link;
