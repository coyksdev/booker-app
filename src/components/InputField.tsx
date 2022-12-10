import React, {useCallback, useState} from 'react';
import {Box, Input, VStack} from 'native-base';
import {Body} from './typography/Body';
import {KeyboardTypeOptions} from 'react-native';

interface IInputFieldProps {
  leftElement?: (iconColor: string) => JSX.Element | JSX.Element[] | undefined;
  rightElement?: (iconColor: string) => JSX.Element | JSX.Element[] | undefined;
  type?: 'text' | 'password' | undefined;
  errorText?: string;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  onChange: (...event: any[]) => void;
}

const InputField = (props: IInputFieldProps) => {
  const [hasText, setHasText] = useState(false);

  // check and assign hastText value
  const onChangeText = useCallback(
    (text: string) => {
      props.onChange(text);
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
    [hasText, props],
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
    <VStack space={2}>
      <Input
        keyboardType={props.keyboardType}
        focusOutlineColor={'primary.500'}
        borderColor={props.errorText ? 'primary.500' : undefined}
        type={props.type}
        borderWidth={props.errorText ? 1 : 0}
        bgColor={'gray.100'}
        placeholder={props.placeholder}
        leftElement={leftElement ? <Box pl={3}>{leftElement}</Box> : undefined}
        rightElement={
          rightElement ? <Box pr={3}>{rightElement}</Box> : undefined
        }
        onChangeText={onChangeText}
        value={props.value}
      />
      {props.errorText ? (
        <Body type="bodySmallRegular" color={'red.500'}>
          {props.errorText}
        </Body>
      ) : undefined}
    </VStack>
  );
};

export default InputField;
