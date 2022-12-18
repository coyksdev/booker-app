import {View} from 'native-base';
import React, {useCallback, useState} from 'react';
import {NativeSyntheticEvent, TextLayoutEventData} from 'react-native';
import {Body} from './typography/Body';

interface ISeeMoreProps {
  text: string;
}

const SeeMore = (props: ISeeMoreProps) => {
  const {text} = props;
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      setLengthMore(e.nativeEvent.lines.length >= 3);
    },
    [],
  );

  return (
    <View>
      <Body
        onTextLayout={onTextLayout}
        type="bodyMediumRegular"
        numberOfLines={textShown ? undefined : 3}
        py={2}>
        {text}
      </Body>
      {lengthMore ? (
        <Body
          type="bodyMediumBold"
          color={'primary.500'}
          onPress={toggleNumberOfLines}>
          {textShown ? 'Read less...' : 'Read more...'}
        </Body>
      ) : null}
    </View>
  );
};

export default SeeMore;
