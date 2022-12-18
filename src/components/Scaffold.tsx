import {Box, View} from 'native-base';
import React from 'react';

interface IScaffoldProps {
  children: React.ReactNode;
  appBar?: JSX.Element;
}

const Scaffold = (props: IScaffoldProps) => {
  const {children, appBar} = props;

  return (
    <Box safeAreaTop flex={1} bgColor={'#F8F8F8'}>
      {appBar}
      <View flex={1} pb={2}>
        {children}
      </View>
    </Box>
  );
};

export default Scaffold;
