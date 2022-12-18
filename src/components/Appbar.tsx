import React from 'react';
import {HStack, IconButton} from 'native-base';
import {LightOutlineArrowLeftIcon} from '../utils/svgs';
import useMainNavigation from '../hooks/useMainNavigation';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';

interface IAppbarProps extends IHStackProps {
  hasBackButton: boolean;
}

const Appbar = (props: IAppbarProps) => {
  const navigation = useMainNavigation();

  const {hasBackButton, ...restOfProps} = props;

  return (
    <HStack {...restOfProps} px={2}>
      <HStack>
        {hasBackButton ? (
          <IconButton
            onPress={() => navigation.pop()}
            icon={<LightOutlineArrowLeftIcon />}
          />
        ) : (
          <></>
        )}
      </HStack>
    </HStack>
  );
};

export default Appbar;
