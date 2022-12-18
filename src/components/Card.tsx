import {VStack} from 'native-base';
import {InterfaceVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import React from 'react';

interface ICard extends InterfaceVStackProps {
  children: React.ReactNode;
}

const Card = (props: ICard) => {
  const {children} = props;
  return (
    <VStack {...props} bgColor={'white'} rounded={'lg'}>
      {children}
    </VStack>
  );
};

export default Card;
