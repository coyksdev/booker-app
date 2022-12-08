import React, {useCallback, useState} from 'react';
import {Box, Input} from 'native-base';

interface IInputFieldProps {
  leftElement?: (iconColor: string) => JSX.Element | JSX.Element[] | undefined;
  rightElement?: (iconColor: string) => JSX.Element | JSX.Element[] | undefined;
  type?: 'text' | 'password' | undefined;
  placeholder: string;
}

const InputField = (props: IInputFieldProps) => {
  const [hasText, setHasText] = useState(false);

  const onChange = useCallback(
    (text: string) => {
      if (text.length > 0) {
        if (!hasText) {
          setHasText(true);
        }
      } else {
        if (hasText) {
          setHasText(false);
        }
      }
    },
    [hasText],
  );

  let leftElement: JSX.Element | JSX.Element[] | undefined;
  let rightElement: JSX.Element | JSX.Element[] | undefined;

  if (hasText) {
    leftElement = props.leftElement?.('black');
    rightElement = props.rightElement?.('black');
  } else {
    leftElement = props.leftElement?.('gray');
    rightElement = props.rightElement?.('gray');
  }

  return (
    <Input
      type={props.type}
      borderWidth={0}
      bgColor={'gray.100'}
      placeholder={props.placeholder}
      leftElement={<Box pl={3}>{leftElement}</Box>}
      rightElement={<Box pr={3}>{rightElement}</Box>}
      onChangeText={onChange}
    />
  );
};

export default InputField;
