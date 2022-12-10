import React from 'react';
import {HStack} from 'native-base';

interface IAppbarProps {
  leading?: JSX.Element[];
}

const Appbar = (props: IAppbarProps) => {
  return (
    <HStack px={2}>
      <HStack>{props.leading?.map(l => l)}</HStack>
    </HStack>
  );
};

export default Appbar;
